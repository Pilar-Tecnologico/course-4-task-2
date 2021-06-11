const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    const  { roverName }  = req.params
    
    const queryParam = querystring.stringify({
        api_key : apikey
    });
    
    await axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${queryParam}`)
          .then(dataNasa =>{
                
            const {photos, ...photo_manifest } = dataNasa.data.photo_manifest;
                
                const data_proc = {
                    ...photo_manifest, 
                    last_manifest : photos.pop()
                }
                res.status(200).json({
                   ...data_proc
                });

            }).catch(err =>{
                res.status(400).json({
                    code: "bad_request",
                    message: "Bad request. Please check your parameters values"
                })
            })

};

module.exports = {getManifest};

