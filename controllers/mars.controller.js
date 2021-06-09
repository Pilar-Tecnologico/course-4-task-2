const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    const roverName = req.params.roverName;
    const key = querystring.stringify({apikey});
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${key}`)
        .then((response)=>{
            const resData = response.data.photo_manifest;
            resData['last_manifest']=resData.photos.pop();
            delete resData.photos;
            res.status(200).json(resData);
        })
        .catch(err=>{
            res.status(400).json({
                code: 'bad_request',
                message: 'Bad Request. Please check your parameters values'
            });
        });
};

module.exports = {getManifest};