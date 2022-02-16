const axios = require('axios').default;
const config = require('config');
const { hostname, apikey } = config.get('services.nasa');
const Joi = require('joi');
const queryMarsSchema = require('./schemas/mars.schema');


async function getManifest(req, res) {
    //COMPLETE WITH YOUR CODE
    try {
        const { roverName } = req.params;
        Joi.assert(roverName, queryMarsSchema);
        const querystring = new URLSearchParams({ api_key: apikey, ...query });
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${querystring()}`);
        const manifest = response.data.photo_manifest;
        manifest.last_manifest = manifest.photos.pop();
        res.send(manifest);
    } catch (error) {
        res.status(500).json
            ({
                code: "internal_server_error",
                message: "Something went wrong"
            })
    }
};

module.exports = { getManifest };