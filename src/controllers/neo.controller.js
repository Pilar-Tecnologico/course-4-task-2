const {getNeoFeedService} = require("../services/neoFeed.service")

async function getNeoFeedController(req, res, next){
    const {start_date, start_end} = req.query;
    try {
        const rover = await getRover(roverName)
        res.json({rover})
        
    } catch (error) {
        res.status(400).json({
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        })
    }
};

module.exports = {getNeoFeedController};