const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    
    const queryParams = new URLSearchParams({
        api_key: apikey,
    }).toString();

    try{
        const value = await roverSchema.validateAsync({ rover_name: roverName });

        if(value){
            axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}?${queryParams}`)
            .then( response => {
                manifest = response.data.photo_manifest;
                // manifest.last_manifest = manifest.photos.find( p => p.earth_date === manifest.max_date );
                manifest.last_manifest = manifest.photos.pop();
                delete manifest.photos;
                res.json(manifest);
            })
            .catch( error => {
                res.json({
                    code: 'bad_request',
                    message: 'Bad request. Please check your parameters values'
                });
            })
        }
    }
    catch (error) { 
        res.json({
            code: 'bad_request',
            message: `Bad request. ${error.message}`
        });
    }
};

module.exports = {getManifest};