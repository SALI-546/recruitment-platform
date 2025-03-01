const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'en', // Langue par défaut
  otherLanguages: ['fr'], // Autres langues supportées
  locales: ['en', 'fr'], // Liste des langues disponibles
  fallbackLng: 'en', // Langue de secours
  defaultNS: 'translation', // Namespace par défaut
  localePath: path.resolve('./public/locales'), // Chemin vers les fichiers de traduction
  interpolation: { escapeValue: false }, // Désactiver l'échappement des valeurs
  detection: {
    order: ['navigator', 'cookie', 'querystring', 'header'], // Détection de la langue
    caches: ['cookie'], // Stocker la langue dans un cookie
  },
});
