const axios = require('axios').default;
const config = require('config');
const { json } = require('express');
const {hostname,apod_path_mars,api_key} = config.get("services.nasa");

async function getManifestService(req,res, next){
    const roverName = req.params.roverName;
    try {
    const response = await axios.get(`${hostname}${apod_path_mars}${roverName}/?api_key=${api_key}`);

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