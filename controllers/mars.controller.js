const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifestController(req, res, next){
    //COMPLETE WITH YOUR CODE
};

module.exports = {getManifestController};