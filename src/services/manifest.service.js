const axios = require('axios').default;
const config = require('config');
const nasaConfig = require("config").get("services.nasa");
const NASA_HOST = nasaConfig.hostname
const API_KEY = nasaConfig.apikey
const PATH = nasaConfig.mars_path

async function getRover(req, res, next){
    const roverName = req.params.roverName;
    try {
    const response = await axios.get(`${NASA_HOST}${PATH}${roverName}/?api_key=${API_KEY}`);
        const resData = response.data.photo_manifest;
        resData['last_manifest']=resData.photos.pop();
        delete resData.photos;
        return resData.data
    } catch (error) {
        const errr = new Error();
        throw errr;
    }
};

module.exports = {getRover};