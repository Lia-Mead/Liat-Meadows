import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-chained-backend';
// import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
// import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../i18n/en.json';
import deTranslation from '../i18n/de.json';
import heTranslation from '../i18n/he.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enTranslation,
      },
    },
    de: {
      translation: {
        ...deTranslation,
      },
    },
    he: {
      translation: {
        ...heTranslation,
      },
    },
  },
  // lng: 'en',
  debug: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: false,
  },
});

export default i18n;
