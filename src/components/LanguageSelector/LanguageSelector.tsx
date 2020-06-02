import React, { useContext, ChangeEvent } from 'react'
import { languageOptions } from '../../languages/languages'
import { LanguageContext } from '../../Global/GlobalStates/GlobalStates';


export default function LanguageSelector() {
    const languageContext = useContext(LanguageContext);

    const languageChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
        if (selectedLanguage !== undefined) {
            languageContext.language.setLanguage(selectedLanguage);
        }
    };

    return (
        <select
            onChange={languageChangeHandler}
            value={languageContext.language.currentLanguage.id}
        >
            {
                languageOptions.map(item => {
                    return (
                        <option key={item.id} value={item.id}>{item.text}</option>
                    );
                })
            }
        </select>
    )
}
