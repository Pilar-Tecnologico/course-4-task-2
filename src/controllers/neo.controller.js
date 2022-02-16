const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const Joi = require("joi");
const { neoSchema } = require("./schemas/nasa.schema");
const { DateTime } = require("luxon");

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    try {
        const now = DateTime.now().toISODate();
        const params = {
          start_date: now,
          end_date: now,
          api_key: apikey,
        };

        Joi.assert(params, neoSchema);
        const queryString = new URLSearchParams(params);
        const response = await axios.get(`${hostname}/neo/rest/v1/feed?${queryString.toString()}`);
        const { links, ...neoData } = response.data;

        res.json(neoData);
      } 
      
      catch (error) {
        res.status(500).json({
          code: "internal_server_error",
          message: "Something went wrong",
        });
      }
};

module.exports = {getNeoFeed};