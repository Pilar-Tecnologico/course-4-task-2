const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getNeoFeed(req, res){
    const today = moment(new Date()).format('YYYY-MM-DD');

    const axiosParams = new URLSearchParams({
        api_key: apikey,
        start_date: today,
        end_date: today
    }).toString();

    axios.get(`${hostname}/neo/rest/v1/feed?${axiosParams}`)
        .then((response) => {
            //console.log("entro por el si");
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                "code": "internal_server_error",
                "message": "Something went wrong."
            });
        });

};

module.exports = {getNeoFeed};