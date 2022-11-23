const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');
const { getRover } = require('../services/manifest.service');

async function getManifestController(req, res, next){
    //COMPLETE WITH YOUR CODE
    const { roverName } = req.params;
	try {
		const rover = await getRover(roverName);
		res.json(rover);
	} catch (error) {
		res.status(400).json({
			code: 'bad_request',
			message: 'Bad request. Please check your parameters values',
		});
	}
}

module.exports = {getManifestController};