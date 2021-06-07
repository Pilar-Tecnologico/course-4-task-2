const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    const now = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
    const paramsQuery = querystring.stringify({start_date: now, end_date: now, api_key:apikey});
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${paramsQuery}`)
        .then((response) =>{
            console.log(response.data.url);
            const data = response.data;
            res.json(data);
            delete data.links;
            res.status(200).json(data);     
        })
        .catch((err) => {
            console.log(error.message);
            res.status(500).json({
              code: "internal_server_error",
              message: "Something went wrong"
            });
        });
};

module.exports = {getNeoFeed};