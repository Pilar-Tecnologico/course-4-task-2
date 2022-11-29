const {getNeoFeedService} = require("../services/neoFeed.service")

async function getNeoFeedController(req, res, next){
    const data = req.query
    try {
        const neoFeed = await getNeoFeedService(data)
        res.json(neoFeed)
        
    } catch (error) {
        res.status(500).json({
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        })
    }
};

module.exports = {getNeoFeedController};