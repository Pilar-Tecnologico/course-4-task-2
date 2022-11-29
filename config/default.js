require('dotenv').config();
const { DateTime } = require("luxon");
let currentDate = DateTime.now().toISODate();

module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            apikey: process.env.NASA_API,
            currentDate: currentDate
        }
    }
}