import React, { useContext } from 'react'
import { LanguageContext } from '../../contexts/GlobalFunctions/GlobalState'

interface TextProps {
    tid: string
}

const TextFC: React.FC<TextProps> = (props) => {
    const languageContext = useContext(LanguageContext);
    return (
        <>
            {languageContext.dictionary[props.tid]}
        </>
    )
};

const Text = (item: string) => {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary.navItems;
};

export {Text, TextFC};