require('dotenv').config();
module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            marsApi: '/mars-photos/api/v1/manifests/',
            neoApi: '/neo/rest/v1/feed',
            apikey: process.env.NASA_API,
        }
    }
}