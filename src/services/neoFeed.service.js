const axios = require("axios").default;
const config = require("config");
const { hostname, apikey, currentDate } = config.get("services.nasa");


async function neoFeedService() {
  try {
    const response = await axios.get(
      `${hostname}/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=${apikey}`
    );
    return response.data.near_earth_objects;
  } catch (error) {
    const err = new Error();

    Object.assign(err, {
      code: "internal_server_error",
    });
    throw err;
  }
}

module.exports = { neoFeedService };
