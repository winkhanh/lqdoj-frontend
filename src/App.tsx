import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Body, Footer } from './sections';
import './App.scss';
import { AuthStateContext, AuthModalContext, LanguageContext, FetchContext, TokenContext } from './Global/GlobalStates/GlobalStates';
import APIFetcher from './Global/SpecialClasses/APIFetcher';
import AuthState from './Global/SpecialClasses/AuthState';
import { dictionaryList, languageOptions, LanguageOptionType, getLanguageById } from './languages/languages';
import { useCookies } from 'react-cookie';
import { fetchUser } from './Global/GlobalFunctions/FetchingActions';
import { ResponseDataType, UserType } from './models';
import ContextsProviderAll from './components/ContextsProviderAll/ContextsProviderAll';
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
    const [tokenState, setTokenState] = useState("");
    const [authState, setAuth] = useState(new AuthState());
    const [user, setUser] = useState(authState.getState().user);

    useEffect(() => {
        if (tokenState !== "") {
            setFetcher(new APIFetcher(tokenState));
            setAuth(new AuthState(user, tokenState));
        } else {
            setFetcher(new APIFetcher());
            setAuth(new AuthState());
        }     
    }, [tokenState, user]); //handle auth

    useEffect(() => {
        if (cookies.lang) {
            const languageFromCookie = getLanguageById(cookies.land);
            if (languageFromCookie) {
                setLanguageState(languageFromCookie);
            }
        }
        if (cookies.token) {            
            fetchUser(
                new APIFetcher(cookies.token),
                "me",
                (user: ResponseDataType<UserType>) => {
                    setUser(user.results);
                    setTokenState(cookies.token);
                },
                () => {                    
                    setTokenState("");
                }
            );
        } else {            
            setTokenState("");
        }

    }, [cookies]);//handle Cookie validation
    return (
        <ContextsProviderAll contexts={[
            [LanguageContext,{
                language: {
                    currentLanguage: currentLanguageState,
                    setLanguage: (selectedLanguage: LanguageOptionType) => {
                        setLanguageState(selectedLanguage);
                        setCookie('lang', selectedLanguage.id);
                    }
                },
                dictionary: dictionaryList[currentLanguageState.id]
            }],
            [AuthModalContext,{
                isDisplay: isAuthPageDisplay,
                toggle: () => {
                    setAuthPageDisplay(
                        prev => !prev
                    );
                }
            }],
            [FetchContext,{
                apiFetcher: fetcher
            }],
            [TokenContext,{
                setToken: (token: string) => {
                    setCookie('token', token);
                }
            }],
            [AuthStateContext,{
                authState: authState,
            }]
        ]}>
            <BaseApp/>
        </ContextsProviderAll>        
    )
}
export default App;
