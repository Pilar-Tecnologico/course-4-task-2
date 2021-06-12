
const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE

    //take the data here
    const currentDay = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    //converts
    const paramsQuery = querystring.stringify({start_date: currentDay, end_date: currentDay, api_key:apikey});
    
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${paramsQuery}`)
        .then((response) =>{
            
            const data = response.data;
            delete data.links;

            res.status(200).json(data);     
        })
        .catch((err) => {
            res.status(500).json({
              code: "internal_server_error",
              message: "Something went wrong",
            });
        });
};

module.exports = {getNeoFeed};