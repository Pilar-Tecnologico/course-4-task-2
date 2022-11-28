const axios = require('axios').default;
const config = require('config');
const {hostname, apikey, neoPath, start_date, end_date} = config.get('services.neows');

async function getNeoFeed(feed) {
    const query = new URLSearchParams({
        ...feed,
        start_date: start_date,
        end_date: end_date,
        api_key: apikey,
    });
    const queryString = query.toString();
    // console.log(start_date, end_date)
    try {
        const response = await axios.get(`${hostname}${neoPath}?${queryString}&${start_date}${end_date}`);
        return response.data;
    } catch(error){
        
        throw error;
    }
}

module.exports = {getNeoFeed};