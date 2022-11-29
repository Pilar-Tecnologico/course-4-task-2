const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifestController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const data = req.query;

    try {
     const response = await NoeServices.getNeoFeedService(data);
     res.json(response)
    } catch (error) {
     res.status(500).json(error);
    }
};

module.exports = {getManifestController};