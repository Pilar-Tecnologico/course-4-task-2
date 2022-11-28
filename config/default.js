require('dotenv').config();
const axios = require('axios').default;

const instance = axios.create({ baseURL: 'https://api.nasa.gov' });

module.exports = {
  services: {
    nasa: {
      nasaInstance: instance,
      apikey: process.env.NASA_API,
    },
  },
};
