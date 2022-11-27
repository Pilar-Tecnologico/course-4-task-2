const axios = require('axios');
const nasaConfig = require('config').get('services.neo');

const NASA_HOST = nasaConfig.hostname;
const APOD_PATH = nasaConfig.apod_path;
const API_KEY = nasaConfig.api_key;

async function getNeo(data) {
    const query = new URLSearchParams({
        ...data,
        api_key: API_KEY
    })

    const queryString = query.toString();
    
    const response = await axios.get(`${NASA_HOST}${APOD_PATH}?${queryString}`);
    return response.data;
}

module.exports = {getNeo};