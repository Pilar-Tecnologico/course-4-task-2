const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const { DateTime } = require("luxon");


async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    try {
    const today = DateTime.now().toISODate();
    const querystring = new URLSearchParams({ api_key: apikey, start_date: today, end_date: today });
    const response = await axios.get(`${hostname}/neo/rest/v1/feed/${querystring.toString()}`);
    const { links, ...data} = response.data;
    res.json(data);
    } catch (error) {
        res.status(500).json
        ({
            code: "internal_server_error",
            message: "Something went wrong"
        })   
    }

};

module.exports = {getNeoFeed};