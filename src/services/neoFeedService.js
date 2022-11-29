const axios = require('axios').default;
const config = require('config'); 
const {hostname, apikey, neoApi} = config.get('services.nasa');

async function getNeoFeed(){
    const date = new Date();
    const currentDate = date.getFullYear()+ "-"+ (date.getMonth()+1) + "-" +date.getDate();
    const query = new URLSearchParams({
        start_date: currentDate,
        end_date: currentDate,
        api_key : apikey
    });
    const querystring = query.toString();
    try {
        const response = await axios.get(`${hostname}${neoApi}?${querystring}`);
        delete response.data.links;
        return response.data;

    } catch (error) {
        console.log(error);
        const err = new Error();
        Object.assign(err, {
            code: 'internal_server_error',
        })
        throw err;
    }
}

module.exports = {getNeoFeed};