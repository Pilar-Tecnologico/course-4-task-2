const {getNeoFeed} = require('../../services/neoFeedService')

async function getNeoFeedController(req, res, next){
    try {
        const response = await getNeoFeed();
        res.json(response);

    } catch (error) {
        next (error);
    }
}

module.exports = {getNeoFeedController};
