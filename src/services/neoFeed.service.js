const axios = require('axios').default;
const config = require('config');
const { response } = require('express');
const { hostname, apikey } = config.get('services.nasa');
const { DateTime } = require('luxon');


const getNeoFeedService = async () => {
	
    //Get today's date for Luxon
    const Today = DateTime.now().toFormat('yyyy-MM-dd');
        //return Today;

    //Get Data Neo with Luxon Date and Axions
        const { data } = await axios.get(`${hostname}/neo/rest/v1/feed?api_key=${apikey}&start_date=${Today}&end_date=${Today}`);
    
        //Delete data (Activity request)
	delete data.links;
	return data;
};

module.exports = { getNeoFeedService };
