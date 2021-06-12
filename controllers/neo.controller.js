const axios = require('axios').default;
const querystring = require('querystring');
const { DateTime } = require("luxon");
const api_key = process.env.API_KEY;

async function getNeoFeed(req, res){
    const currentDate = DateTime.now().toISODate();
    const urlParams = querystring.stringify({
        start_date: currentDate,
        end_date: currentDate,
        api_key: api_key
    });
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${urlParams}`)
        .then((response)=>{
            const dataResult = response.data;
            delete dataResult.links;
            res.status(200).json(dataResult);
        })
        .catch(err=>{
            res.status(500).json({
                code: "internal_server_error",
                message: "something went wrong"
            });
        });
};

module.exports = {getNeoFeed};