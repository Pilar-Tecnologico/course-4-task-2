const axios = require("axios").default;
const config = require("config");
const { hostname, api_key } = config.get("services.nasa");

async function getManifest(req, res) {
  const query = req.query;
  const queryString = new URLSearchParams({ api_key, query });
}

module.exports = { getManifest };
