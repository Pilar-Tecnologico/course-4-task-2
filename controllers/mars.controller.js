const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    const roverName = req.params.roverName;
    axios
    .get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${apikey}`
    ).then((response) => {
        const resData =  response.data.photo_manifest;
        
        const last_manifiest = response.data.photo_manifest.photos[
            response.data.photo_manifest.photos.length - 1
        ];

        delete resData.photos;

        resData.last_manifest = last_manifiest;
        res.status(200).json(resData);
    })
    .catch((err) => {
        res.status(400).json({
            code: 'bad_request',
            message: 'Bad request. Please check your parameters values'
        });
    })
};

module.exports = {getManifest};