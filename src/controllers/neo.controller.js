const { getNeoFeedService } = require('../services/neoFeed.service');

async function getNeoFeedController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const { start_date, end_date } = req.query;
	try {
		const neo = await getNeoFeedService();
		res.json(neo);
	} catch (error) {
		res.status(500).json({
			code: 'internal_server_error',
			message: 'Something went wrong',
		});
	}
};

module.exports = { getNeoFeedController };