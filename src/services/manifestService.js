const axios = require('axios').default;
const config = require('config'); 
const {hostname, apikey, marsApi} = config.get('services.nasa');

async function getManifest(data){
    const query = new URLSearchParams({
        api_key : apikey
    });
    console.log(query);
    const querystring = query.toString();
    try {
        const roverName = data.roverName
        const response = await axios.get(`${hostname}${marsApi}${roverName}?${querystring}`);
        const lastManifest = response.data.photo_manifest.photos.pop();
        delete response.data.photo_manifest.photos;
        response.data.photo_manifest = {
            ...response.data.photo_manifest,
            last_manifest: lastManifest
        }
        return response.data.photo_manifest;
        //res.json(response.data.photo_manifest);

    } catch () {
        /*const err = new Error();
        Object.assign(err,{
            status: 400,
            code: "bad_request",
            message: "Bad request. Please check your parameters values"
        })*/
        return false;
    }
}

module.exports = {getManifest};