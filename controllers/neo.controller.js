const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    const params = {
        start_date: req.query.start_date,
        end_date: req.query.end_date
    };
    const axiosParams = querystring.stringify({api_key: apikey, ...params})
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err =>{
            res.status(500).json({
                code: "internal_server_error",
                message: "Something went wrong"
            });
        })
};

module.exports = {getNeoFeed};



