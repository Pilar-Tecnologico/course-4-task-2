const axios                    = require('axios').default;
const config                   = require('config');
const {hostname, apikey}       = config.get('services.nasa');
const Joi                      = require('joi');
const { marsSchema }           = require('./schemas/mars-schema');
const Manifest                 = require('../db/ManifestSchema');


async function getManifest(req, res){
    const data                 = {
        roverName : req.params.roverName,
        api_key   : apikey
    }   
    try {
        Joi.assert(data, marsSchema);
        const urlManifest      = `${hostname}/mars-photos/api/v1/manifests/${data.roverName}?api_key=${data.api_key}`;
        const response         = await axios.get(urlManifest);
        
        if(response && response.status === 200) {
            const manifest         = response.data.photo_manifest;
            manifest.last_manifest = manifest.photos.pop();
            delete manifest.photos;
            
            const newManifest = new Manifest({
                name          : manifest.name,
                landing_date  : manifest.landing_date,
                launch_date   : manifest.launch_date,
                status        : manifest.status,
                max_sol       : manifest.max_sol,
                max_date      : manifest.max_date,
                total_photos  : manifest.total_photos,
                last_manifest : manifest.last_manifest

            })

            await newManifest.save();

            res.status(200).json(manifest);
        } else {
            throw new Error();
        }
        
    } catch (error) {
        res.status(400).json({
            code    : "bad_request",
            message : "Bad request. Please check your parameters values"
        })
    }
};

module.exports = { getManifest };