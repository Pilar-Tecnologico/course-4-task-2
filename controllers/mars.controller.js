const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    const params = {
        roverName: req.params.roverName
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...params})
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/:roverName${axiosParams}`)
    .then((response) => {
        res.json(response.data)
    }).catch(err => {
        res.status(500).json(err);
    })
};

module.exports = {getManifest};