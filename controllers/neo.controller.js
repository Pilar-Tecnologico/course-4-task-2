const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const { DateTime } = require("luxon");

async function getNeoFeed(req, res){
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const axiosParams = querystring.stringify({start_date: date, end_date: date, api_key: apikey});

    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${axiosParams}`)
        .then((response) => {
            let data = response.data
            delete data.links
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({
                "code": "internal_server_error",
                "message": "Something went wrong"
            });
        });

};

module.exports = {getNeoFeed};