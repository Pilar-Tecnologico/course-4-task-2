const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const { DateTime } = require('luxon');

async function getNeoFeed(req, res){

    try {
        const today = DateTime.now().toISODate();
        const queryParams = new URLSearchParams({
            start_date: today,
            end_date: today,
            api_key: apikey
        });
        
        const response = await axios.get(`${hostname}/neo/rest/v1/feed?${queryParams.toString()}`)
        const { links, ...objectRest } = response.data;

        res.json(objectRest);

    } catch (error) {
        res.status(500).json({
            "code": "internal_server_error",
            "message": "Something went wrong"
        });
    }; 

};

module.exports = {getNeoFeed};