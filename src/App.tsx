import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Body, Footer } from './sections';
import './App.scss';
import { AuthorizingPageContext, LanguageContext, FetchContext } from './contexts/GlobalStates/GlobalStates';
import APIFetcher from './contexts/GlobalFunctions/APIFetcher';
import { dictionaryList, languageOptions, LanguageOptionType, getLanguageById } from './languages/languages';
import { useCookies } from 'react-cookie';
const BaseApp: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Body />
                <Footer />
            </BrowserRouter>
        </div>
    );
}
const App: React.FC = () => {
    const [cookies, setCookie] = useCookies();
    // console.log(cookies.lang || languageOptions[0]);
    const [isAuthPageDisplay, setAuthPageDisplay] = useState(false);

    const [currentLanguageState, setLanguageState] = useState(getLanguageById(cookies.lang) || languageOptions[0]);
    // console.log(currentLanguageState);
    const [currentDictionaryState, setDictionaryState] = useState(dictionaryList[currentLanguageState.id]);

    //const [fetcher, setFetcher] = useState(new Fetcher());

    
    return (
        <LanguageContext.Provider value={{
            language: {
                currentLanguage: currentLanguageState,
                setLanguage: (selectedLanguage: LanguageOptionType) => {
                    setLanguageState(selectedLanguage);
                    setDictionaryState(dictionaryList[selectedLanguage.id]);
                    setCookie('lang', selectedLanguage.id);
                }
            },
            dictionary: currentDictionaryState
        }}>
            <AuthorizingPageContext.Provider value={{
                isDisplay: isAuthPageDisplay,
                toggle: () => {
                    setAuthPageDisplay(
                        prev => !prev
                    );
                }
            }}>
                <FetchContext.Provider value={{
                    apiFetcher: new APIFetcher()
                }}>
                    <BaseApp />
                </FetchContext.Provider>
            </AuthorizingPageContext.Provider>
        </LanguageContext.Provider>
    )
}
export default App;
