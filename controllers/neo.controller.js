const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const moment = require("moment")

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    const today = moment().format("YYYY-MM-DD")

    const query = {
        start_date: today,
        end_date: today
    };
    const axiosParams = querystring.stringify({...query, api_key: apikey});

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