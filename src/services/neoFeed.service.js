const axios = require('axios').default;
const config = require('config');
const {hostname,apikey} = config.get("services.nasa");
const {DateTime} = require("luxon");
const DayDate = DateTime.now().toFormat("yyyy-MM-dd");


async function getNeoFeedService(req, res, next){
    const query = new URLSearchParams({
        ...req.query,
        start_date : DayDate,
        end_date : DayDate,
        api_key: apikey
     });
     const queryString = query.toString();
    try {
     const response = await axios.get(`${hostname}neo/rest/v1/feed?&api_key=${queryString}`);
     return response.data;
    } catch (error) {
     res.status(400).json({
        "code": "bad_request",
        "message": "Bad request. Please check your parameters values"
    });
    }
 };

module.exports = {getNeoFeedService};