const axios = require("axios").default;
const queryString = require("querystring");
const apiKey = process.env.API_KEY;

async function getNeoFeed(req, res) {
  const today = new Date();
  const currentDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const key = queryString.stringify({ api_key: apiKey });
  const axiosParams = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&${key}`;

  axios
    .get(axiosParams)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json({
        code: "internal_server_error",
        message: "Something went wrong",
      });
    });
}

module.exports = { getNeoFeed };
