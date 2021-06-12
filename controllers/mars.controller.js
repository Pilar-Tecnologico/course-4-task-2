const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getMarsManifests(req, res){
    const paramsQuery = querystring.stringify({api_key: apikey})
    const rover = req.params.roverName;

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?${paramsQuery}`)
        .then((response)=>{

            //photo_manifest
            const data = response.data.photo_manifest;
            //photos
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

};

module.exports = {getMarsManifests};