const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    try {
        const {roverName} = req.params
        const params = querystring.stringify({api_key: apikey})

        const manifests = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${params}`)
        
        const {photos, ...mainInfo} = manifests.data.photo_manifest
        const lastManifest = photos[photos.length - 1]
        const response = {...mainInfo, last_manifest: lastManifest}

        res.status(200).json(response)
    }
    catch {
        const badResponse = {
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        }
        res.status(400).json(badResponse)
    }
};

module.exports = {getManifest};