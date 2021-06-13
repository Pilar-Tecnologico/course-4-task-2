const axios = require("axios").default;
const querystring = require("querystring");
const apikey = process.env.API_KEY;

async function getManifest(req, res) {
  const rover = req.params.roverName;
  const query = querystring.stringify({ api_key: apiKey });

  axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?${query}`)
    .then((response) => {
      console.log(process.env.MI_NAME);

      const data = response.data.photo_manifest;

      // unstructured response to remove 'photos'
      const lastManifest = data.photos.pop();
      delete data.photos;

      data.last_manifest = lastManifest;

      res.status(200).json(data);
    })

    .catch((err) => {
      res.status(400).json({
        code: "bad_request",
        message: "Bad request. Please check your parameters values",
      });
    });
}

module.exports = { getManifest };
