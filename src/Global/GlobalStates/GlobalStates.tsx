import React from 'react';
import { languageOptions, dictionaryList } from '../../languages/languages'
import { LanguageOptionType } from '../../languages/languages'
import APIFetcher from '../SpecialClasses/APIFetcher';
import AuthState from '../SpecialClasses/AuthState';

const AuthorizingPageContext = React.createContext({
    isDisplay: false,
    toggle: () => {}
});
const AuthStateContext = React.createContext({
    authState: new AuthState()
});
const LanguageContext = React.createContext({
    language: {
        currentLanguage: languageOptions[0],
        setLanguage: (selectedLanguage: LanguageOptionType) => {}
    },
    dictionary: dictionaryList[languageOptions[0].id]
});
const FetchContext = React.createContext({
    apiFetcher: new APIFetcher()
});
const TokenContext = React.createContext({
    setToken: (token : string)=>{}
});
export { AuthorizingPageContext, AuthStateContext, LanguageContext, FetchContext, TokenContext };