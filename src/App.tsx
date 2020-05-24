import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Body, Footer } from './sections';
import './App.scss';
import { AuthorizingPageContext, LanguageContext } from './contexts/GlobalFunctions/GlobalState';
import { dictionaryList, languageOptions, LanguageOptionType } from './languages/languages';
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
    const [isAuthPageDisplay, setAuthPageDisplay] = useState(false);
    const [currentLanguageState, setLanguageState] = useState(languageOptions[0]);
    const [currentDictionaryState, setDictionaryState] = useState(dictionaryList[(languageOptions[0].id)]);
    return (
        <LanguageContext.Provider value={{
            language: {
                currentLanguage: currentLanguageState,
                setLanguage: (selectedLanguage:LanguageOptionType) => {
                    setLanguageState(selectedLanguage);
                    setDictionaryState(dictionaryList[selectedLanguage.id]);
                }
            },
            dictionary: currentDictionaryState
        }
        }>
            <AuthorizingPageContext.Provider value={{
                isDisplay: isAuthPageDisplay,
                toggle: () => {
                    setAuthPageDisplay(
                        prev => !prev
                    );
                }
            }
            }>
                <BaseApp />
            </AuthorizingPageContext.Provider>
        </LanguageContext.Provider>
    )
}
export default App;
