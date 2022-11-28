const axios = require('axios').default;
const config = require('config');
const { DateTime } = require('luxon');
const nasaConfig = require("config").get("services.nasa");
const NASA_HOST = nasaConfig.hostname
const API_KEY = nasaConfig.API_KEY

async function getNeoFeedService() {
    const today = DateTime.now().toFormat('yyyy-mm-dd');
    const data = await axios.get(`${NASA_HOST}/neo/rest/v1/feed?api_key=${API_KEY}&start_date=${today}&start_end=${today}`)
    
    delete data.links;
    return data
}

module.exports= {getNeoFeedService}
