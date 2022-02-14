const axios = require("axios").default;
const config = require("config");
const { hostname, apikey } = config.get("services.nasa");

async function getManifest(req, res) {
  //COMPLETE WITH YOUR CODE
  try {
    const roverName = req.params.roverName;

    const queryString = new URLSearchParams({ api_key: apikey });

    const response = await axios.get(
      `${hostname}/mars-photos/api/v1/manifests/${roverName}?${queryString.toString()}`
    );

    response.data.photo_manifest["last_manifest"] =
      response.data.photo_manifest.photos.pop();
    delete response.data.photo_manifest.photos;

    res.json(response.data["photo_manifest"]);
  } catch (error) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad request. Please check your parameters values",
    });
  }
}

module.exports = { getManifest };
