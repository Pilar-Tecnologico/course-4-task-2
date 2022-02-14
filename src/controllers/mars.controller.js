const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const Joi = require('joi');
const { roverSchema } = require('./schemas/nasa.schema');

async function getManifest(req, res){
    try {
        const { roverName } = req.params
        Joi.assert(roverName, roverSchema)
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`)
        const data = response.data.photo_manifest
        const manifest = {...data, last_manifest: data.photos.pop()}
        delete manifest.photos
        res.json(manifest)

    } catch (error) {
        res.status(400).json(
            {
                code: "bad_request",
                message: "Bad request. Please check your parameters values"
            }
        )
     }
    
};

module.exports = {getManifest};