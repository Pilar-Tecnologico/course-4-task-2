const axios = require('axios').default;
const config = require('config'); //--> Create file .env
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    //### GET :: /mars/manifest/:roverName --> 
    //res.json('Endpoint test /mars/manifest ok!');

    //#### Service to consume: Test axios.get() 
    //const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/curiosity?api_key=${apikey}`); 

    try {
        //#### Params--{curiosity, opportunity, spirit}
        const roverName = req.params.roverName;
        //console.log(roverName); 

        // Use of the URLSearchParams object. Returns a URL parameter.
        const querystring = new URLSearchParams({
            api_key: apikey
        });
        //console.log(querystring);//---(.toString. it was not necessary.)

        //Service to consume and querystring: 
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}?${querystring}`);//.toString. it was not necessary.
        //console.log(response.data.photo_manifest);

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