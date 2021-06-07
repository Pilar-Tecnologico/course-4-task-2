const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res) {
  //COMPLETE WITH YOUR CODE
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${req.params.roverName}?api_key=${apikey}`
    )
    .then((resp) => {
      const resp_obj = resp.data.photo_manifest;
      const last_manifest =
        resp.data.photo_manifest.photos[
          resp.data.photo_manifest.photos.length - 1
        ];
      //deletes the specified attribute along with its value
      delete resp_obj.photos;
      resp_obj.last_manifest = last_manifest;

      res.status(200).json(resp_obj);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        code: 'bad_request',
        message: 'Bad request. Please check your parameters values',
      });
    });
}

module.exports = { getManifest };
