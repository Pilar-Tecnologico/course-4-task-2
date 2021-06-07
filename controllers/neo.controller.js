const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const date = require('../utils/dates');

async function getNeoFeed(req, res) {
  //COMPLETE WITH YOUR CODE
  const today = date.getTodayDate();
  axios
    .get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apikey}`
    )
    .then((resp) => {
      const resp_obj = {
        element_count: resp.data.element_count,
        near_earth_objects: resp.data.near_earth_objects,
      };
      res.status(200).json(resp_obj);
    })
    .catch((err) => {
      res.status(500).json({
        code: 'internal_server_error',
        message: 'Something went wrong',
      });
    });
}

module.exports = { getNeoFeed };
