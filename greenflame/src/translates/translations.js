import  es  from './translations/es';
import  en  from './translations/en';
import  pt  from './translations/pt';
import MultiLanguage from 'react-redux-multilang';

const translate = new MultiLanguage({
    en: en,
    es: es,
    ru: pt
})

export default translate;

