require('dotenv').config();
module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            apikey: process.env.NASA_API,
        }
    },
    database: {
        connectionString: process.env.DB_CONNECTION_STRING,
    }
}