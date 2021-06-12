const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const { DateTime } = require("luxon");

async function getNeoFeed(req, res){
    const today = DateTime.now().toISODate();
    const params = querystring.stringify({
        start_date: today,
        end_date: today,
        api_key: apikey
    });    
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${params}`)
        .then((response) => {
            const data = response.data;
            delete data.links;
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                "code": "internal_server_error",
                "message": "Something went wrong"
            });
        });
};

module.exports = {getNeoFeed};