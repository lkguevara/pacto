require('dotenv').config();
const cloudinary = require('cloudinary').v2;
//En la carpeta raiz (backend), hay que tener un archivo .env y poner ahi la API KEY de cada uno
const {API_NAME, API_KEY, API_SECRET} = process.env;

cloudinary.config({
    cloud_name: API_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
  });

  module.exports = cloudinary;