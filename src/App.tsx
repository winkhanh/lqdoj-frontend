import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Body, Footer } from './sections';
import './App.scss';
import { AuthStateContext, AuthorizingPageContext, LanguageContext, FetchContext, TokenContext } from './Global/GlobalStates/GlobalStates';
import APIFetcher from './Global/SpecialClasses/APIFetcher';
import AuthState from './Global/SpecialClasses/AuthState';
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

    const [fetcher, setFetcher] = useState(new APIFetcher());
    const [token, setToken] = useState("");
    const [authState, setAuth] = useState(new AuthState());
    useEffect(()=>{
        if (token!=="") 
        {
            setFetcher(new APIFetcher(token));
            setAuth(new AuthState(token));
        }
        else 
        {
            setFetcher(new APIFetcher());
            setAuth(new AuthState());
        }
    },[token]);//handle auth
    useEffect(()=>{
        if (cookies.lang){
            const languageFromCookie=getLanguageById(cookies.land);
            if (languageFromCookie){
                setLanguageState(languageFromCookie);
            }
        }

    },[cookies]);//handle Cookie validation
    return (
        <LanguageContext.Provider value={{
            language: {
                currentLanguage: currentLanguageState,
                setLanguage: (selectedLanguage: LanguageOptionType) => {
                    setLanguageState(selectedLanguage);
                    setCookie('lang', selectedLanguage.id);
                }
            },
            dictionary: dictionaryList[currentLanguageState.id]
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
                    apiFetcher: fetcher
                }}>
                    <TokenContext.Provider value={{
                        setToken:(token:string)=>{setToken(token);}
                    }}>
                        <AuthStateContext.Provider value={{
                            authState:authState,
                        }}>
                            <BaseApp />    
                        </AuthStateContext.Provider>
                    </TokenContext.Provider>
                </FetchContext.Provider>
            </AuthorizingPageContext.Provider>
        </LanguageContext.Provider>
    )
}
export default App;
