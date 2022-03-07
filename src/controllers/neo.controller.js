const axios = require("axios").default;
const config = require("config");
const { DateTime } = require("luxon");
const { hostname, apikey } = config.get("services.nasa");

async function getNeoFeed(req, res) {
  try {
    const queryString = new URLSearchParams({
      start_date: DateTime.now().toISODate(),
      end_date: DateTime.now().toISODate(),
      api_key: apikey,
    });
    const dataApi = await axios.get(
      `${hostname}/neo/rest/v1/feed?${queryString.toString()}`
    );
    const { data } = dataApi;
    const response = {
      element_count: data.element_count,
      near_earth_objects: data.near_earth_objects,
    };
    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ code: "internal_server_error", message: "something went wrong" });
  }
}

module.exports = { getNeoFeed };
