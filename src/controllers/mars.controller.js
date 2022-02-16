const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    res.json({
        roverName: asd
    })
};

module.exports = {getManifest};