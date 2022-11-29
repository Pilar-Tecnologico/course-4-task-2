const axios = require('axios').default;
const config = require('config');
const { DateTime } = require('luxon');
const nasaConfig = require("config").get("services.nasa");
const NASA_HOST = nasaConfig.hostname
const API_KEY = nasaConfig.apikey
const PATH = nasaConfig.neo_path
const today = DateTime.now().toFormat('yyyy-MM-dd')

async function getNeoFeedService(data) {
    const query = new URLSearchParams({
        ...data,
        start_date: today,
        end_date: today,
        api_key: API_KEY
    });
    const queryString = query.toString();
    console.log(queryString)
    try {
        const data = await axios.get(`${NASA_HOST}${PATH}?${queryString}`)
        return data.data 
    } catch (error) {
        const errr = new Error();
        throw errr;
    }
}

module.exports= {getNeoFeedService}
