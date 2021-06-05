const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;

async function getManifest(req, res){
    const axiosParams = querystring.stringify({api_key: apiKey});
    const roverName = req.params.roverName

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${axiosParams}`)
        .then((response) => {
            let rover = response.data.photo_manifest
            let lastElement = getLastArrItem(rover.photos)
            delete rover.photos
            rover.last_manifest = lastElement
            res.json(rover);
        })
        .catch(err => {
            res.status(400).json({
                "code": "bad_request",
                "message": "Bad request. Please check your parameters values"
            });
        });

    const getLastArrItem = (arr) => { 
        let lastItem=arr[arr.length-1];
        return lastItem;
    }  
    
};

module.exports = {getManifest};