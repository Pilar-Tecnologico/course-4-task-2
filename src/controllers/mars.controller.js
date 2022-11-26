const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifestController(req, res, next){
    //COMPLETE WITH YOUR CODE
    try {
        const response = await axios.get(``);
        res.json(response.data);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {getManifestController};