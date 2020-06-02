import React from 'react';
import { languageOptions, dictionaryList } from '../../languages/languages'
import { LanguageOptionType } from '../../languages/languages'
import APIFetcher from '../GlobalFunctions/APIFetcher';

const AuthorizingPageContext = React.createContext({
    isDisplay: false,
    toggle: () => {}
});
const AuthState = React.createContext({
    isAuthed: false,
    isAdmin: true
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
export { AuthorizingPageContext, AuthState, LanguageContext, FetchContext, TokenContext };