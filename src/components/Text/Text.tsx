import  { useContext } from 'react'
import { LanguageContext } from '../../contexts/GlobalStates/GlobalStates'

const TextFC = (tid:string) => {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[tid]
};

const Text = (item: string) => {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[item];
};

export {Text, TextFC};