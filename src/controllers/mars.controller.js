const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const Joi = require('joi');
const { marsSchema } = require('./schemas/nasa-schema');


async function getManifest(req, res){
    const data = {
        roverName: req.params.roverName,
        api_key: apikey
    }   
    try {
        Joi.assert(data, marsSchema);
        const urlManifest= `${hostname}/mars-photos/api/v1/manifests/${data.roverName}?api_key=${data.api_key}`;
        const response = await axios.get(urlManifest);
        const manifest = response.data.photo_manifest;
        manifest.last_manifest = manifest.photos.pop();
        delete manifest.photos;
        res.status(200).json(manifest);
        
    } catch (error) {
        res.status(400).json({
            code: "bad_request",
            message: "Bad request. Please check your parameters values"
        });
    }
};
module.exports = { getManifest };