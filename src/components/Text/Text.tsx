import  { useContext } from 'react'
import { LanguageContext } from '../../contexts/GlobalFunctions/GlobalState'

const TextFC = (tid:string) => {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[tid]
};

const Text = (item: string) => {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary.navItems;
};

export {Text, TextFC};