require('dotenv').config();

module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            apikey: process.env.NASA_API,
        },
        mongodb: {
            uri: process.env.MONGO_URI
        }
    }
}
