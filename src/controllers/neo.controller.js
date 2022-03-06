const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const { DateTime } = require('luxon'); //--> npm i luxon
const Joi = require("joi");
const { neoSchema } = require("../schemas/nasa.schemas");

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE

    try {
        const today = DateTime.now().toISODate();

        
        // Use of the URLSearchParams object. Returns a URL parameter.
        const queryParams = new URLSearchParams({
            start_date: today,
            end_date: today,
            api_key: apikey
        });
        
        //validate JOI
        Joi.assert(queryParams, neoSchema);


        //Service to consume and querystring:
        const response = await axios.get(`${hostname}/neo/rest/v1/feed?${queryParams.toString()}`)
        
        // #### Response: Get **ONLY the current date**. - Destructure response to get data.
        const { links, ...objectRest } = response.data;

        res.json(objectRest);//status(200) is default.

    } catch (error) {
        //### **500 Internal Server Error**
        res.status(500).json({
            "code": "internal_server_error",
            "message": "Something went wrong"
        });
    }; 

};

module.exports = {getNeoFeed};