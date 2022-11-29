const {getRover} = require('../services/manifest.service');

async function getManifestController(req, res, next) {
    const data = req.query;
    try {
        const rover = await getRover(data)
        res.json(rover)
        
    } catch (error) {
        res.status(400).json({
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        })
    }
}

module.exports = { getManifestController };