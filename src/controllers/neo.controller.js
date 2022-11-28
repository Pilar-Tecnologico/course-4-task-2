const { getNeoFeed } = require('../services/neoFeed.service');

async function getNeoFeedController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const data = req.query;
    try {
        const response = await getNeoFeed(data);
        res.json(response);
    } catch(error){
        if(error.response){
            console.error(error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(error.message);
            res.status(500).json({
                    "code": "internal_server_error",
                    "message": "Something went wrong"
            });
        }
    }
    
};

module.exports = {getNeoFeedController};