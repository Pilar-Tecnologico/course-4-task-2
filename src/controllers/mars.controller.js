const axios = require("axios").default;
const config = require("config");
const { hostname, apikey } = config.get("services.nasa");

async function getManifest(req, res) {
    try {
        const roverName = req.params.roverName;

        const queryString = new URLSearchParams({
            api_key: apikey
        });

        const response = await axios.get(
            `${hostname}/mars-photos/api/v1/manifests/${roverName}?${queryString.toString()}`
        );
        const data = response.data.photo_manifest;
        data.last_manifest = data.photos.pop();
        delete data.photos;
        res.json(data);

    } catch (error) {
        res.status(400).json({
            code: "bad_request",
            message: "Bad request. Please check your parameters values",
        });
    }
}

module.exports = { getManifest };