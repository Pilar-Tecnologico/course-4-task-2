const axios = require("axios").default;
const config = require("config");
const { hostname, apikey } = config.get("services.nasa");
const marsSchema = require("./schemas/marsSchema");
const joi = require("joi");

async function getManifest(req, res) {
  //COMPLETE WITH YOUR CODE
  try {
    const { roverName } = req.params;
    joi.assert(roverName, marsSchema);
    const response = await axios.get(
      `${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`
    );
    const { photos, ...resData } = response.data.photo_manifest;
    const manifest = { ...resData, last_manifest: photos.pop() };
    res.json(manifest);
  } catch (err) {
    res
      .status(400)
      .json({
        code: "bad_request",
        message: "Bad request. Please check your parameters values",
      });
  }
}

module.exports = { getManifest };
