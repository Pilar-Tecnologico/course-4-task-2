
const {getFeed} = require('../services/neoFeed.service');

async function getNeoFeedController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const data = req.query;
    try {
        const response = await getFeed(data);
        res.json(response);
        
    } catch (error) {
       next(error);
    }
};

module.exports = {getNeoFeedController};