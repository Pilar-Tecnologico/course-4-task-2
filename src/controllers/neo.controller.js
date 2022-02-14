const axios = require("axios").default;
const config = require("config");
const moment = require("moment");
const { hostname, apikey } = config.get("services.nasa");

async function getNeoFeed(req, res) {
  //COMPLETE WITH YOUR CODE

  try {
    const today = moment(new Date()).format("YYYY-MM-DD");
    //console.log(today);
    const queryString = new URLSearchParams({
      start_date: today,
      end_date: today,
      api_key: apikey,
    });

    const response = await axios.get(
      `${hostname}/neo/rest/v1/feed?${queryString.toString()}`
    );

    delete response.data.links;
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      code: "internal_server_error",
      message: "Somethin went wrong",
    });
  }
}

module.exports = { getNeoFeed };
