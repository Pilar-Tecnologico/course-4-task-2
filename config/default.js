require('dotenv').config();
module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            mars_path: '/mars-photos/api/v1/manifests/',
            neo_path: '/neo/rest/v1/feed',
            apikey: process.env.NASA_API,
        },
    }
}