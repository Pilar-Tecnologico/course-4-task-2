const axios = require("axios").default;
const config = require("config");
const { hostname, api_key } = config.get("services.nasa");

async function getManifest(req, res) {
  try {
    const query = req.params.roverName;
    const queryString = new URLSearchParams({ api_key });

    const response = await axios.get(
      `${hostname}/mars-photos/api/v1/manifests/${query}?${queryString.toString()}`
    );
    const data = response.data.photo_manifest;
    const last_manifest = data.photos.pop();
    delete data["photos"];

    res.json({ ...data, last_manifest });
  } catch (error) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad request. Please check your parameters values",
    });
  }
}

module.exports = { getManifest };
