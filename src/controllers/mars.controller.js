const axios = require("axios").default;
const config = require("config");
const { hostname, apikey } = config.get("services.nasa");
const Joi = require("joi");
const { marsSchema } = require("./schemas/nasa.schema");

const getManifest = async (req, res) => {
  try {
    const { roverName } = req.params;
    params = {
      rover_name: roverName,
      api_key: apikey,
    };
    Joi.assert(params, marsSchema);
    const response = await axios.get(
      `${hostname}/mars-photos/api/v1/manifests/${params.rover_name}?api_key=${params.api_key}`
    );
    const data = response.data.photo_manifest;
    const manifest = { ...data, last_manifest: data.photos.pop() };
    const { photos, ...manifestData } = manifest;
    res.json(manifestData);
  } catch (error) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad request. Please check your parameters values",
    });
  }
};

module.exports = { getManifest };
