
const {getManifest} = require('../services/manifest.service');

async function getManifestController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const data = req.query;
    try {
        const response = await getManifest(data);
        res.json(response);
        
    } catch (error) {
       next(error);
    }
};

module.exports = {getManifestController};