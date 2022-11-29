const axios = require('axios').default;
const config = require('config');
//const {hostname, apikey} = config.get('services.nasa');

async function getManifestController(req, res, next){
    res.json({
        msj: "Esto es una prueba"
    })
};

module.exports = {getManifestController};