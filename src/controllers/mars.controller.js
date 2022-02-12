const axios = require('axios').default;
const config = require('config'); //--> Create file .env
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    //### GET :: /mars/manifest/:roverName --> 
    res.json('Endpoint test /mars/manifest ok!');
};

module.exports = {getManifest};