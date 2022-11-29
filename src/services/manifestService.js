const axios = require('axios').default;
const config = require('config'); 
const {hostname, apikey, marsApi} = config.get('services.nasa');

async function getManifest(data){
    const query = new URLSearchParams({
        api_key : apikey
    });
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

    } catch (error) {
        const err = new Error();
        Object.assign(err, {
            code: 'bad_request',
        })
        throw err;
    }
}

module.exports = {getManifest};