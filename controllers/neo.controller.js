const axios = require('axios').default;
const querystring = require('querystring');
const { DateTime } = require('luxon');
const apiKey = process.env.API_KEY;

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    //https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY 
    const today = DateTime.now().toISODate();
    
    const queryParams = {
      start_date : today,
      end_date: today
      //api_key : apiKey
    };
    
    //const axiosParams = querystring.stringify(queryParams);
    //const axiosParams = querystring.stringify({api_key: apiKey, ...queryParams});
    const axiosParams = querystring.stringify({api_key: apiKey, ...queryParams});
    
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${axiosParams}`)
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