// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'en', 
    supportedLngs: ['en', 'fr'], 
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', 
    },
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['navigator', 'cookie', 'localStorage', 'querystring', 'header'],
      caches: ['cookie'], 
    },
  });

export default i18n;