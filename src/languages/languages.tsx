import en from './en';
import vi from './vi';

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

export { dictionaryList, languageOptions };
export type LanguageOptionType = ILanguageOptionType;