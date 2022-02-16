const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    try{
        const {roverName} = req.params;
        const query = req.query;
        const queryString = new URLSearchParams({api_key: apikey, ... query});
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}/?${queryString.toString()}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        });
    }
};

module.exports = {getManifest};