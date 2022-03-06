const axios = require('axios').default;
const config = require('config'); //--> Create file .env
const {hostname, apikey} = config.get('services.nasa');
const Joi = require("joi");
const { marsSchema } = require("../schemas/nasa.schemas");

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    
    try {
        const roverName = req.params.roverName;

        //Validate JOI
        const params = {
            rover_name: roverName,
            api_key: apikey,
        };
        Joi.assert(params, marsSchema);
    
        // Use of the URLSearchParams object. Returns a URL parameter.
        const querystring = new URLSearchParams({
            api_key: apikey
        });
    
        //Service to consume and querystring: 
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}?${querystring}`);//.toString. it was not necessary.
        

        // #### Response: Get 'last_manifest'. Destructure response. Use of pop() and delete to remove 'photos'.
        const data = response.data.photo_manifest;
        data['last_manifest'] = data.photos.pop();
        delete data.photos;

        res.json(data); //status(200) is default.

    } catch (error) {
        //### **400 Bad Request**
        res.status(400).json({
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        });
    }

};

module.exports = {getManifest};