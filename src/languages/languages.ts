import en from './en';
import vi from './vi';

interface IDictionaryType {
    navItems: Array<Array<string>>,
    AUTH_BUTTON: string
}

interface ILanguageOptionType {
    id: string,
    text: string
}

interface IStringIndexed {
    [index: string]: any
}

const dictionaryList = {
    'vi': vi,
    'en': en
} as IStringIndexed;

const languageOptions: LanguageOptionType[] = [
  { id: 'vi', text: 'Tiếng Việt' },
  { id: 'en', text: 'English'}
];
const getLanguageById = (id : string) =>{
    return languageOptions.find(lang =>{
        return lang.id===id;
    });
}
export { getLanguageById, dictionaryList, languageOptions };
export type LanguageOptionType = ILanguageOptionType;
export type DictionaryType = IDictionaryType;
export type StringIndexedType = IStringIndexed;