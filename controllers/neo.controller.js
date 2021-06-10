const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const { DateTime } = require("luxon");


async function getNeoFeed(req, res){
        //COMPLETE WITH YOUR CODE
    const today = DateTime.now().toISODate();
    axios
    .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apikey}`
    )
    .then((response) => {
        const res_obj = {
            element_count: response.data.element_count,
            near_earth_objects: response.data.near_earth_objects,
        };
        res.status(200).json(res_obj);
    })
    .catch((err) => {
        res.status(500).json({
            code: 'internal_server_error',
            message: 'Something went wrong',
        });
    });
};

module.exports = {getNeoFeed};