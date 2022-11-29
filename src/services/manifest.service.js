const axios = require('axios').default;
const config = require('config');
const nasaConfig = require("config").get("services.nasa");
const NASA_HOST = nasaConfig.hostname
const API_KEY = nasaConfig.API_KEY

async function getRover(roverName){
    const response = await axios.get(`${NASA_HOST}/mars-photos/api/v1/manifests/${roverName}?apikey=${API_KEY}`);
    const {name, landing_date, landing_lunch, status, max_sol, max_date, total_photos, photos } = response.data.photo_manifest
    const manifest_last = photos[photos.lenght -1 ];
    return {
        name, landing_date, landing_lunch, status, max_sol, max_date, total_photos, photos, manifest_last
    }
};

module.exports = {getRover};