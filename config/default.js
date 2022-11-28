require('dotenv').config();
module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            mars_path: '/mars-photos/api/v1/rovers/curiosity/photos',
            neo_path: '/neo/rest/v1/feed',
            api_key: process.env.API_KEY,
        }
    }
}