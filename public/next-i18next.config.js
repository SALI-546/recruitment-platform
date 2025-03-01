const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'en', 
  otherLanguages: ['fr'], 
  locales: ['en', 'fr'], 
  fallbackLng: 'en', 
  defaultNS: 'translation', 
  localePath: path.resolve('./public/locales'), 
  interpolation: { escapeValue: false }, 
  detection: {
    order: ['navigator', 'cookie', 'querystring', 'header'], 
    caches: ['cookie'], 
  },
});
