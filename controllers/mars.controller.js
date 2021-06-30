// rovers' names: Curiosity, Opportunity, Spirit.

const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    camera = req.query.camera;
    const roverName = req.params.roverName;
    const nasaKey = querystring.stringify({api_key: apikey});
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${nasaKey}`)
        .then((response) => {
            const resData =  response.data.photo_manifest;
            // resData['last_manifest'] = resData.photos.pop();
            // delete resData.photos;
            res.status(200).json(resData);
        })
        .catch(err => {
            res.status(400).json({
                code: 'bad_request',
                message: 'Bad request. Please check your parameters values'
            });
        });
};

async function getRoversPhotos(req, res){
    const sol = req.query.sol
    const camera = req.query.camera;
    const roverName = req.params.roverName;
    const nasaKey = querystring.stringify({api_key: apikey});
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${camera}&${nasaKey}`)
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.status(400).json({
                code: 'bad_request',
                message: 'Bad request. Please check your parameters values'
            });
        });
};

module.exports = {getManifest, getRoversPhotos};