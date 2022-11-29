
const NoeServices = require("../services/neoFeed.service")

async function getNeoFeedController(req, res, next){

   const data = req.query;

   try {
    const response = await NoeServices.getNeoFeedService(data);
    res.json(response)
   } catch (error) {
    res.status(500).json(error);
   }
};

module.exports = {getNeoFeedController};