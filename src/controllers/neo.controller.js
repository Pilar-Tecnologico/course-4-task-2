const axios = require("axios").default;
const config = require("config");
const { hostname, api_key } = config.get("services.nasa");

async function getNeoFeed(req, res) {
  try {
    const now = new Date().toISOString().split("T")[0];

    let start_date = now;
    let end_date = now;
    const queryString = new URLSearchParams({ api_key, start_date, end_date });

    const response = await axios.get(
      `${hostname}/neo/rest/v1/feed?${queryString.toString()}`
    );
    delete response.data["links"];

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      code: "internal_server_error",
      message: "Something went wrong",
    });
  }
}

module.exports = { getNeoFeed };
