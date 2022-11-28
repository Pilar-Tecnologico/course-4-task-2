require('dotenv').config();
const { DateTime } = require("luxon");

// const date = DateTime.now().toISODate();

module.exports = {
    services: {
        mars: {
            hostname: 'https://api.nasa.gov',
            manifestPath: '/mars-photos/api/v1/manifests',
            apikey: process.env.NASA_API,   
        },
        neows: {
            hostname: 'https://api.nasa.gov',
            neoPath: '/neo/rest/v1/feed',
            start_date:DateTime.now().toISODate(),
            end_date:DateTime.now().toISODate(),
            apikey: process.env.NASA_API
        }
    }
}