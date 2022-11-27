const axios = require('axios');
const nasaConfig = require('config').get('services.nasa');

const NASA_HOST = nasaConfig.hostname;
const APOD_PATH_MANIFEST = nasaConfig.apod_path_manifest;
const API_KEY = nasaConfig.api_key;

async function getManifest(data, data2) {
    const query = new URLSearchParams({
        ...data,
        api_key: API_KEY
    })
    const paramsString = data2.toString();
    const queryString = query.toString();
    console.log(queryString);
    
    const response = await axios.get(`${NASA_HOST}${APOD_PATH_MANIFEST}/${paramsString}?${queryString}`);
    return response.data;
    
    
}

module.exports = {getManifest};