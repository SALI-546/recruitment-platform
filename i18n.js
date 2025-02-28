const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  lng: 'en',
  fallbackLng: 'en',
  locales: ['en', 'fr'],
  defaultNS: 'translation',
  interpolation: { escapeValue: false },
});