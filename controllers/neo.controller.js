const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res){
    //COMPLETE WITH YOUR CODE

    
    const today = new Date();
    const currentday= today.getFullYear() + '-' + (today.getMonth()+1)+ '-' +today.getDate();
    const axiosQuery = querystring.stringify({start_date: currentday, end_date: currentday, api_key:apikey});
    
    console.log(currentday);
    console.log(axiosQuery);

    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${axiosQuery}`)
    .then((response) => {
        const data = response.data;
        delete data.links
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            
                "code": "internal_server_error",
                "message": "Something went wrong"
            
        })

    })
















};

module.exports = {getNeoFeed};