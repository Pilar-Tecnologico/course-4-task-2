const axios = require('axios').default;
const querystring = require('querystring');
const api_key = process.env.API_KEY;

async function getManifest(req, res){
    const roverName = req.params.roverName;
    const key = querystring.stringify({api_key});
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${key}`)
        .then((response)=> {
            const resultData = response.data.photo_manifest;
            resultData['last_manifest']=resultData.photos.pop();
            delete resultData.photos;
            res.status(200).json(resultData);
        })
        .catch(err=>{
            res.status(400).json({
                code: 'bad_request',
                message: 'Bad Request. Please check your parameters values'
            });
        })
};

module.exports = {getManifest};