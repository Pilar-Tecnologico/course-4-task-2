const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getNeoFeed(req, res){
    const day = moment(new Date()).format('YYYY-MM-DD');

    const params = new URLSearchParams({api_key: apikey,start_date: day, end_date: day}).toString();

    axios.get(`${hostname}/neo/rest/v1/feed?${params}`)
        .then((response) => {
            const object = response.data;
            delete object.links;
            res.json(object);
        })
        .catch((error) => {
            res.status(500).json({
                code: "internal_server_error",
                message: "Something went wrong."
            });
        });
};

module.exports = {getNeoFeed};