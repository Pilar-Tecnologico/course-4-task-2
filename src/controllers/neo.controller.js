const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const { DateTime } = require('luxon'); //--> npm i luxon

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    //### GET :: /neo/feed. --> 
    //res.json('Endpoint test /Neo/Feed ok!');

    //#### Service to consume: Test axios.get():
    //const response = await axios.get(`${hostname}/neo/rest/v1/feed?start_date=2022-02-02&end_date=2022-02-02&api_key=${apikey}`)
    
    try {
        //Use Luxon library - ISO 8601 Date. 
        const today = DateTime.now().toISODate();

        //#### Params-- {`start_date` and `end_date`} should be `2021-06-05` (YYYY-MM-DD).
        // Use of the URLSearchParams object. Returns a URL parameter.
        const queryParams = new URLSearchParams({
            start_date: today,
            end_date: today,
            api_key: apikey
        });
        //console.log(querystring.toString);//---(.toString. it was necessary.)

        //Service to consume and querystring:
        const response = await axios.get(`${hostname}/neo/rest/v1/feed?${queryParams.toString()}`)
        //console.log(response.data);

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