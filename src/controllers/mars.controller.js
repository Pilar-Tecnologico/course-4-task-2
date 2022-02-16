const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    const roverName=req.params.roverName;
    axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`)
    .then(response=>{
        manifest = response.data.photo_manifest;
        manifest.last_manifest = manifest.photos.pop();
        delete manifest.photos;
        res.json(manifest);
    })
    .catch(error=>{
        res.json({
            code:'bad_request',
            message:'bad request.Please check your parameters values'
        });
    })
};

module.exports = {getManifest};