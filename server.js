// server.js
require('dotenv').config();  // Charge les variables d'environnement depuis le fichier .env

// Récupère les variables d'environnement
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Affiche le message dans la console
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
