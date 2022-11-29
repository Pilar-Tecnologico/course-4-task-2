const axios = require('axios').default;
const config = require('config');
const {hostname,apikey} = config.get("services.nasa");


async function getManifestService(req,res, next){
    const roverName = req.params.rover_name;

    try {
    const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/:roverName?${roverName}&api_key=${apikey}`);

        const resData = response.data.photo_manifest;
        resData['last_manifest']=resData.photos.pop();
        delete resData.photos;
        res.status(200).json(resData);
    } catch (error) {
     res.status(500).json({
        "code": "internal_server_error",
        "message": "Something went wrong"
    });
    }

 };

 module.exports = {getManifestService};