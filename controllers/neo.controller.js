const axios = require("axios").default;
const moment = require("moment");
const querystring = require("querystring");
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res) {
	const dateNow = moment().format("YYYY-MM-DD");
	const paramsUrl = querystring.stringify({
		start_date: dateNow,
		end_date: dateNow,
		api_key: apikey,
	});
	const url = `https://api.nasa.gov/neo/rest/v1/feed?${paramsUrl}`;

	try {
		const resp = await axios.get(url);
		const result = await resp.data;
		delete result["links"];
		res.json(result);
	} catch (error) {
		res.status(500).json({
			code: "internal_server_error",
			message: "Something went wrong",
		});
	}
}

module.exports = {getNeoFeed};
