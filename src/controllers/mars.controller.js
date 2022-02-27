const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    // res.json('running');
    // res.json({hostname:apikey})
    
    const { roverName } = req.params;
    
    // https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=DEMO_KEY 
    try {
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`);
        res.json(response.data);
    }
    catch(error){
        error_message = {
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        }
        res.status(400).json(error_message)
    }
};

module.exports = {getManifest};
