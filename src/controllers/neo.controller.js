const { neoFeedService } = require("../services/neoFeed.service");

async function getNeoFeedController(req, res, next) {
 
  try {
    const response = await neoFeedService();
    res.json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = { getNeoFeedController };
