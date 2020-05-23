import React, { useState, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Body, Footer } from './sections';
import './App.scss';
import { AuthorizingPageContext, LanguageContext } from './contexts/GlobalFunctions/GlobalState';
import { dictionaryList } from './languages/languages';
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
    const languageContext = useContext(LanguageContext);
    const [isAuthPageDisplay, setAuthPageDisplay] = useState(false);

    const [currentLanguageState, setLanguageState] = useState(languageContext.language.currentLanguage);
    const [currentDictionaryState, setDictionaryState] = useState(languageContext.dictionary);

    return (
        <LanguageContext.Provider value={{
            language: {
                currentLanguage: currentLanguageState,
                setLanguage: (selectedLanguage) => {
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
