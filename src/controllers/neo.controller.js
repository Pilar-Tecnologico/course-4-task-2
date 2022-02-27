const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    // https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY 
    const {start_date, end_date } = req.query;

    try {
        const response = await axios.get(`${hostname}/neo/rest/v1/feed?api_key=${apikey}`);
        // const data = response.data.filter(element => (element.start_date> start_date && element.start_date< start_date));
        res.json(response.data);
    }
    catch(error){
        error_message = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(error_message)
    }
};

module.exports = {getNeoFeed};