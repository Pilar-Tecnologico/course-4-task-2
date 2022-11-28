const {getManifest} = require('../services/manifest.service');

async function getManifestController(req, res, next){
    const data = req.query;
    const {roverName} = req.params;
    try {
        const response = await getManifest(data, roverName);
        res.json(response);
    }
      catch (error) {
        if(error.response){
            res.status(error.response.status).json({
                "code": "bad_request",
                "message": "Bad request. Please check your parameters values"
            });
        } else {
            console.error(error.message);
            res.status(500).json({
                code: 'internal_server_error',
                message: error.message,
            });
        }

    }
};

module.exports = {getManifestController};