import { useContext } from 'react'
import { LanguageContext } from '../../contexts/GlobalStates/GlobalStates'

const Text = (item: string) => {
	const languageContext = useContext(LanguageContext);
	return languageContext.dictionary[item];
};

export { Text };