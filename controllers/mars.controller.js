const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    const roverName = req.params.roverName;
    const API_Key = querystring.stringify({api_key: apiKey});
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${API_Key}`)
    .then((response) => {
        const data = response.data.photo_manifest;
        data.last_manifest = data.photos.pop();
        delete data.photos;
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({
            code: "bad_request",
            message: "Bad request. Please check your parameters values."
        });
    })
};

module.exports = {getManifest};