const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const moment = require('moment');

async function getNeoFeed(req, res){    

    const currentDate = moment(new Date()).format('YYYY-MM-DD');

    const queryParams = new URLSearchParams({
        api_key: apikey,
        start_date: currentDate,
        end_date: currentDate
    }).toString();

    axios.get(`${hostname}/neo/rest/v1/feed?${queryParams}`)
    .then( (response) => {
        const objects = response.data;
        delete objects.links;
        res.json(objects)
    })
    .catch( (error) => {
        res.json({
            code: 'internal_server_error',
            message: 'Something went wrong'
        })
    }) 
};

module.exports = {getNeoFeed};