const axios = require('axios').default;
const config = require('config');
const { json } = require('express');

const {hostname,apod_path,api_key} = config.get("services.nasa");

const {DateTime} = require("luxon");
const DayDate = DateTime.now().toFormat("yyyy-MM-dd");
//console.log(DayDate)


async function getNeoFeedService(req, res, next){
    const query = new URLSearchParams({
        ...req.query,
        start_date : DayDate,
        end_date : DayDate,
        api_key: api_key
     });
     const queryString = query.toString();
    try {
     const response = await axios.get(`${hostname}${apod_path}?${queryString}`);
     return response.data;
    } catch (error) {
     res.status(400).json({
        "code": "bad_request",
        "message": "Bad request. Please check your parameters values"
    });
    }
 };

module.exports = {getNeoFeedService};