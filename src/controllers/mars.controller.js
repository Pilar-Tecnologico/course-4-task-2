const axios = require('axios').default;
const config = require('config');
const Mars = require('../../models/mars.model');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    
    try{
        const {roverName} = req.params;
        const query = req.query;
        const queryString = new URLSearchParams({api_key: apikey, ... query});
        const response = await axios.get(`${hostname}/mars-photos/api/v1/manifests/${roverName}/?${queryString.toString()}`);
        const data = response.data;
        const last = data['photo_manifest'].photos.reduce((valor1, valor2) => {return new Date(valor1) >  new Date(valor2) ? valor1 : valor2; });
        const marsArray = {name: data['photo_manifest'].name, 
        landing_date: data['photo_manifest'].landing_date,
        launch_date: data['photo_manifest'].launch_date,
        status: data['photo_manifest'].status,
        max_sol: data['photo_manifest'].max_sol,
        max_date: data['photo_manifest'].max_date,
        total_photos: data['photo_manifest'].total_photos,
        photos: last};
        const mars = new Mars(marsArray);
        await mars.save();
        res.json ({
            name: data['photo_manifest'].name,
            landing_date: data['photo_manifest'].landing_date,
            launch_date: data['photo_manifest'].launch_date,
            status: data['photo_manifest'].status,
            max_sol: data['photo_manifest'].max_sol,
            max_date: data['photo_manifest'].max_date,
            total_photos: data['photo_manifest'].total_photos,
            photos: last
        });
        
    } catch (error) {
        res.status(400).json({
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        });
        console.log(error.message);
    }
};

module.exports = {getManifest};