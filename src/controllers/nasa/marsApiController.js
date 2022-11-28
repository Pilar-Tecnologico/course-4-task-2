const {getManifest} = require('../../services/manifestService')

async function getManifestController(req, res, next){
    const data = req.params;
    try {
        const response = await getManifest(data);
        res.json(response);

    } catch (error) {
        const err = new Error();
        Object.assign(err, {
            code: 'bad_request',
            details: error.mesagge,
        })
        next(error);
    }
}

module.exports = {getManifestController};

/*const axios = require('axios').default;
const config = require('config'); 
const {hostname, apikey} = config.get('services.nasa');

async function getManifestController(req, res, next){
    try {
        const roverName = req.params.roverName
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`);
        const lastManifest = response.data.photo_manifest.photos.pop();
        delete response.data.photo_manifest.photos;
        response.data.photo_manifest = {
            ...response.data.photo_manifest,
            last_manifest: lastManifest
        }
        //return response.data.photo_manifest;
        res.json(response.data.photo_manifest);

    } catch (error) {
        res.status(400).json({
            code: "bad_request",
            message: "Bad request. Please check your parameters values"
        });
    }
};

module.exports = {getManifestController};*/