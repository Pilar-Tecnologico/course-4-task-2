const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    const params = req.params.roverName;
    const axiosParams = querystring.stringify({api_key: apikey})
    
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${params}?${axiosParams}`)
    .then((response) => {
        const data = response.data.photo_manifest;
        const lastManifest = data.photos.pop();
        delete data.photos;
      
        data.lastManifest = lastManifest;
       
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({
            code: 'bad_request',
            message: 'Bad request. Please check your parameters values'
        })
    })
};

module.exports = {getManifest};