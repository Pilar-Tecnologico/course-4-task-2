const axios = require("axios").default;
const queryString = require("querystring");
const apiKey = process.env.API_KEY;

async function getManifest(req, res) {
  const roverName = req.params.roverName;
  const key = queryString.stringify({ api_key: apiKey });
  const axiosParams = `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${key}`;

  axios
    .get(axiosParams)
    .then((response) => {
      let respond = response.data.photo_manifest;
      respond.photos = respond.photos[respond.photos.length - 1];
      res.status(200).json(respond);
    })
    .catch((error) => {
      res.status(400).json({
        code: "bad_request",
        message: "Bad request. Please check your parameters values",
      });
    });
}

module.exports = { getManifest };
