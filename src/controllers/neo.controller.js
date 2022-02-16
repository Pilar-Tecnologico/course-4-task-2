const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const Joi = require('joi');
const schema = require('../controllers/schemas/neo.schema');

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    try{
        const query = req.query;
        Joi.assert(query, schema);
        const queryString = new URLSearchParams({api_key: apikey, ... query});
        const response = await axios.get(`${hostname}/neo/rest/v1/feed/?${queryString.toString()}`);
        res.json(response.data);
        } catch (error) {
        res.status(500).json({
            "code": "internal_server_error",
            "message": "Something went wrong"
        })
    }
};

module.exports = {getNeoFeed};