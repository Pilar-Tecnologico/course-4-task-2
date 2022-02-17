const axios = require('axios').default;
const config = require('config');
const { hostname, apikey } = config.get('services.nasa');
const { DateTime } = require('luxon');
const Joi = require('joi');
const { neoSchema } = require('./schemas/nasa.schema');

async function getNeoFeed(req, res){
    const dataQuery= {
        start_date : DateTime.now().toISODate(),
        end_date: DateTime.now().toISODate(),
        api_key: apikey
    }

    try {
        Joi.assert(dataQuery, neoSchema);
        const urlManifest = `${hostname}/neo/rest/v1/feed?api_key=
        ${dataQuery.api_key}&start_date=
        ${dataQuery.start_date}&end_date=
        ${dataQuery.end_date}` ;
        const response = await axios.get(urlManifest)
        const { links, ...resto } = response.data;
        res.status(200).json(resto);
        
    } catch (error) {
        res.status(500).json({
            code: "internal_server_error",
            message : "Something went wrong"
        })
    }
};

module.exports = { getNeoFeed };