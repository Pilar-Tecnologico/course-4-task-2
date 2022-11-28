const axios = require('axios').default;
const { DateTime } = require('luxon');
const config = require('config');
const { response } = require('express');
const { hostname, apikey } = config.get('services.nasa');

const getNeoFeedService = async () => {
	const today = DateTime.now().toFormat('yyyy-MM-dd');
	const { data } = await axios.get(
		`${hostname}/neo/rest/v1/feed?api_key=${apikey}&start_date=${today}&end_date=${today}`
	);

	delete data.links;
	return data;
};

module.exports = { getNeoFeedService };