const {getManifest} = require('../services/manifest.service');

async function getManifestController(req, res, next){
    const data = req.query;
    const {roverName} = req.params;
    try {
        const response = await getManifest(data, roverName);
        res.json(response);
    }
      catch (error) {
        next(error);
    }
};

module.exports = {getManifestController};