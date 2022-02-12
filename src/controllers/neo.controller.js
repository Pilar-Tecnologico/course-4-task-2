const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    //### GET :: /neo/feed. --> 
    res.json('Endpoint test /Neo/Feed ok!');
};

module.exports = {getNeoFeed};