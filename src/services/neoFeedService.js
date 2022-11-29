const axios = require('axios').default;
const config = require('config'); 
const {hostname, apikey, neoApi} = config.get('services.nasa');

async function getNeoFeed(data){
    const query = new URLSearchParams({
        api_key : apikey
    });
    const querystring = query.toString();
    try {
        const response = await axios.get(`${hostname}${neoApi}?${querystring}`);
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
            code: 'internal_server_error',
        })
        throw err;
    }
}

module.exports = {getNeoFeed};