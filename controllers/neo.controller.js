const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getNeoFeed(req, res) {
    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const query = querystring.stringify({ api_key: apikey, start_date: today, end_date: today });

    await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?${query}`)
        .then((response) => {
            // unstructured response to remove 'links'
            const { links, ...objectRest } = response.data;
            res.status(200).json(objectRest);
        })

        .catch(() => {
            res.status(500).json({
                code: "internal_server_error",
                message: "Something went wrong"
            });
        })
};

module.exports = { getNeoFeed };