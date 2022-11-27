const {getManifest} = require("../services/manifest.service.js")

async function getManifestController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const data = req.query;
    const data2 = req.params.name;
    try{
        const response = await getManifest(data, data2);
        const responsePhotos = response.photo_manifest.photos
        const found = responsePhotos.find(element => element.earth_date == response.photo_manifest.max_date)
        const final = {...response.photo_manifest, photos: found}
        final['last_manifest'] = final['photos'];
        delete final['photos'];
        res.json(final);
        
    
    } catch (error) {
        res.status(400).json({
			code: 'bad_request',
			message: 'Bad request. Please check your parameters values',
		});
    }
};

module.exports = {
    getManifestController
};