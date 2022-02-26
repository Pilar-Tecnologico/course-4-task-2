const axios = require("axios").default;
const config = require("config");
const { hostname, apikey } = config.get("services.nasa");

async function getManifest(req, res) {
  const Rover = req.params;
  const queryParams = new URLSearchParams({ api_key: apikey }).toString;

  try {
    //const data = await roverSchema({roverName: Rover});
    const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${Rover}?${queryParams}`);
    const datos = response.data.photo_manifest;
    const manifests = { ...datos, last_manifest: datos.photos.pop() };
    res.json(manifests);
  } catch (error) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad request. Please check your parameters values.",
    });
  }
}

module.exports = { getManifest };
