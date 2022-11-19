const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getNeoFeedController(req, res, next){
    //COMPLETE WITH YOUR CODE
};

module.exports = {getNeoFeedController};