import React from 'react';
import { languageOptions, dictionaryList } from '../../languages/languages'
import { LanguageOptionType } from '../../languages/languages'

const AuthorizingPageContext = React.createContext({
    isDisplay: false,
    toggle: () => { }
});
const AuthState = React.createContext({
    isAuthed: true,
    isAdmin: true
});
const LanguageContext = React.createContext({
    language: {
        currentLanguage: languageOptions[0],
        setLanguage: (selectedLanguage: LanguageOptionType) => { }
    },
    dictionary: dictionaryList[languageOptions[0].id]
});

export { AuthorizingPageContext, AuthState, LanguageContext };