const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    //https://api.nasa.gov/mars-photos/api/v1/manifests/:roverName
    //https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity
    
    const varRoverName = req.params.roverName;
    //const axiosParams = querystring.stringify({api_key: apiKey});
    const axiosParams = new URLSearchParams({
        api_key: apikey,
    }).toString();
    
    //axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${varRoverName}?${axiosParams}`)
    axios.get(`${hostname}/mars-photos/api/v1/manifests/${varRoverName}?${axiosParams}`)
        .then((response) => {
            //console.log("entro por el si");
            const datos = response.data.photo_manifest;
            const last_manifest = datos.photos.pop();
            delete datos;
            res.status(200).json(last_manifest);
        })
        .catch(err => {
            res.status(400).json({
                "code": "bad_request",
                "message": "Bad request. Please check your parameters values"
            });
        });
};

module.exports = {getManifest};