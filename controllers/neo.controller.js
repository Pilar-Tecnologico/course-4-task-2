const axios = require('axios').default;
const querystring = require('querystring');
const {TimeDate} = require("luxon");
const api_key = process.env.API_KEY;

async function getNeoFeed(req, res){
    const todayDate = TimeDate.now().toISODate();
    const urlParams = querystring.stringify({
        start_date: todayDate,
        end_date: todayDate,
        api_key: api_key
    });
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${urlParams}`)
        .then((response)=>{
            const data = response.data;
            delete data.links;
            res.status(200).json(data);
        })
        .catch(err=>{
            res.status(500).json({
                "code": "internal_server_error",
                "message": "something went wrong"
            });
        });
};

module.exports = {getNeoFeed};