const axios = require("axios").default;
const config = require("config");
const { hostname, apikey } = config.get("services.nasa");
const luxon = require("luxon");

async function getNeoFeed(req, res) {
  //COMPLETE WITH YOUR CODE
  try {
    const now = luxon.DateTime.now().toISODate();
    const queryString = new URLSearchParams({
      start_date: now,
      end_date: now,
      api_key: apikey,
    });
    const response = await axios.get(
      `${hostname}/neo/rest/v1/feed?${queryString.toString()}`
    );

    const { links, ...data } = response.data;

    res.json(data);
  } catch (err) {
    res.status(500).json({
      code: "internal_server_error",
      message: "Somethin went wrong",
    });
  }
}

module.exports = { getNeoFeed };
