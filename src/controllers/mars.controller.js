const axios = require("axios").default;
const config = require("config");
const { hostname, apikey } = config.get("services.nasa");
const Joi = require("joi");
const roverSchema = require("./schemas/mars.rover.schema");

async function getManifest(req, res) {
  const { roverName } = req.params;
  try {
    Joi.assert(roverName, roverSchema);
    const dataApi = await axios.get(
      `${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`
    );
    const data = dataApi.data.photo_manifest;
    const response = {
      name: data.name,
      landing_date: data.landing_date,
      launch_date: data.launch_date,
      status: data.status,
      max_sol: data.max_sol,
      max_date: data.max_date,
      total_photos: data.total_photos,
      last_manifest: data.photos[data.photos.length - 1],
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad Request, please check your parameters values",
    });
  }
}
module.exports = { getManifest };
