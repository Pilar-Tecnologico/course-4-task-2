const axios = require('axios').default;
const config = require('config');
const { hostname, apikey } = config.get('services.nasa');

async function getNeoFeed(req, res){
    try{
        const currentDate = new Date().toISOString().slice(0,10);

        // Nasa API call
        const query = `${hostname}/neo/rest/v1/feed?api_key=${apikey}&start_date=${currentDate}&end_date=${currentDate}`;
        const nasaResponse = await axios.get(query);
        
        // Modify response
        const response = nasaResponse.data;
        delete response.links;
        
        res.status(200).json(response);
    } catch(err) {
        res.status(500).json({
            code: "internal_server_error",
            message: "Something went wrong"
        });
    }
};

module.exports = {getNeoFeed};