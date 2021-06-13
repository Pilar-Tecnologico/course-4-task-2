const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    const roverName = req.params.roverName;
    const axiosParams = querystring.stringify({api_key: apikey});
    
    await axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${axiosParams}`)
        .then((response) => {
            const Data =  response.data.photo_manifest;
            Data['last_manifest'] = Data.photos.pop();
            delete Data.photos;
            res.status(200).json(Data);
        })
        .catch(err => {
            res.status(400).json({
                code: 'bad_request',
                message: 'Bad request. Please check your parameters values'
            });
        });
};

module.exports = {getManifest};