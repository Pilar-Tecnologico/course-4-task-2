const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE
    const {start_date, end_date} = req.query;

    const queryParam = querystring.stringify({
        api_key    : apikey,
        start_date : start_date,
        end_date   : end_date
    })
    await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${queryParam}`)
          .then(dataNasa =>{
                const {element_count, near_earth_objects} = dataNasa.data;
                res.status(200).json({
                    element_count, 
                    near_earth_objects
                });

            }).catch(err =>{
                res.status(500).json({
                    code: "internal_server_error",
                    message: "Something went wrong"
                })
            })
    
};

module.exports = {getNeoFeed};