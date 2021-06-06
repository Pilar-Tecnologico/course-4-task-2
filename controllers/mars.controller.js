const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    const axiosParams = querystring.stringify({api_key: apikey});
    const roverName = req.params.roverName;



    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${axiosParams}`)
        .then((response) => {
            const data= response.data.photo_manifest
            const lastobject = data.photos.pop()
            delete data.photos
            data.last_manifest = lastobject

            res.json(data);
        })
        .catch(err => {
            res.status(400).json({
                
                "code": "bad_request",
                "message": "Bad request. Please check your parameters values"
            })
        })
};

module.exports = {getManifest};