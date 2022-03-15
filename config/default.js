require('dotenv').config();
module.exports = {
    services: {
        nasa: {
            hostname  : 'https://api.nasa.gov',
            apikey    : process.env.NASA_API,
            mongo_uri : process.env.MONGODB_URI
        }
    }
}