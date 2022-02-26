const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    try{
        const {roverName} = req.params;
        
        const query = `${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`;
        const nasaResponse = await axios.get(query);

        const response = nasaResponse.data.photo_manifest;
        response.last_manifest = response.photos.slice(-1)[0];
        delete response.photos;

        res.status(200).json(response);
    } catch(err) {
        res.status(400).json({
            code: "bad_request",
            message: "Bad request. Please check your parameters values"
        });
    }
};

module.exports = {getManifest};