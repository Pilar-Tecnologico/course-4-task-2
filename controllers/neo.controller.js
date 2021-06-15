const axios = require('axios').default;
const querystring = require('querystring');
const { DateTime } = require("luxon");
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res){

    const todaysDate = DateTime.now().toISODate();
    const query = {
        start_date: todaysDate,
        end_date: todaysDate
    };
    const axiosParams = querystring.stringify({api_key: apikey, ...query})

    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${axiosParams}`)
    .then((response) => {
        const data = response.data;
        delete data.links;
       
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            "code": "internal_server_error",
            "message": "Something went wrong"
        })
    })
};

module.exports = {getNeoFeed};