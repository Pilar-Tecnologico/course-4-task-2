const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res) {
    const params = req.params.roverName;
    const query = querystring.stringify({ api_key: apikey });

    await axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${params}?${query}`)
        .then((response) => {
            const data = response.data.photo_manifest.photos;

            // unstructured response to remove 'photos'
            const { photos, ...object } = response.data.photo_manifest;

            // generate 'last_manifest' in object
            object.last_manifest = data[data.length - 1];

            res.status(200).json(object);
        })

        .catch(() => {
            res.status(400).json({
                code: "bad_request",
                message: "Bad request. Please check your parameters values"
            });
        })
};

module.exports = { getManifest };