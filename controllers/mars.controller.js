const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;


async function getManifest(req, res){

    const rover = req.params.roverName;
    // console.log(rover);
    const axiosQuery = querystring.stringify({api_key: apikey});
    // console.log(axiosQuery);
    
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?${axiosQuery}`)
      .then((response) => {
        let data = response.data.photo_manifest;
        const lastManifest = data.photos[data.photos.length-1];
        // console.log(lastManifest);
        delete data.photos;
        data.last_manifest = lastManifest;
        res.json(data);
      })
      .catch(err => {
        res.status(400).json({
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        });
      });
};

module.exports = {getManifest};