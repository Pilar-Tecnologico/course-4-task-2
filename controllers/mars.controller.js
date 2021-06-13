const axios = require("axios").default;
const querystring = require("querystring");
const apiKey = process.env.API_KEY;

exports.getManifest = async (req, res) => {
  const roverName = req.params.roverName;
  const axiosParams = querystring.stringify({ api_key: apiKey });

  try {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${axiosParams}`
      )
      .then((response) => {
        const data = response.data.photo_manifest;
        data["last_manifest"] = data.photos.pop();
        delete data.photos;
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad request. Please check your parameters values",
    });
  }
};
