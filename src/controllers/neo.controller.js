const { getFeed } = require('../services/neoFeed.service');

async function getNeoFeedController(req, res, next) {
  //COMPLETE WITH YOUR CODE
  try {
    const data = await getFeed();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      code: 'internal_server_error',
      message: 'Something went wrong',
    });
  }
}

module.exports = { getNeoFeedController };
