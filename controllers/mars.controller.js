const axios = require("axios").default;
const querystring = require("querystring");
const api_key = process.env.API_KEY;

async function getManifest(req, res) {
	const roverName = req.params.roverName;
	const key = querystring.stringify({api_key});
	const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${key}`;

	try {
		const resp = await axios.get(url);
		const result = resp.data.photo_manifest;
		result["last_manifest"] = result.photos.pop();
		delete result["photos"];
		res.json(result);
	} catch (error) {
		res.status(400).json({
			code: "bad_request",
			message: "Bad request. Please check your parameters values",
		});
	}
}

module.exports = {getManifest};
