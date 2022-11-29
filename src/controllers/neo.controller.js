const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getNeoFeedController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const data = req.query;

   try {
    const response = await getNeoFeedService(data);
    res.json(response)
   } catch (error) {
    res.status(500).json(error);
   }
};

module.exports = {getNeoFeedController};