const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const luxon = require('luxon')

async function getNeoFeed(req, res){
    try {
        const todayDate = luxon.DateTime.local().toISODate()
        const params = querystring.stringify({
            start_date: todayDate,
            end_date: todayDate,
            api_key: apikey
        })
        const getNeo = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${params}`)

        const {links, ...neo} = getNeo.data
        res.status(200).json(neo)
    }
    catch {
        const badResponse = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(badResponse)
    }

};

module.exports = {getNeoFeed};