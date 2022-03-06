require('dotenv').config();
module.exports = {
    // API NASA
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            apikey: process.env.NASA_API,
        }
    },
    // MONGODB_URL_DB = `host/database`
    database: {
        mongodb: {
            DB_HOST: process.env.MONGODB_HOST,
            DB_DATABASE: process.env.MONGODB_DATABASE,
            DB_COLLECTION: process.env.MONGODB_COLLECTION,
            DB_USER: process.env.MONGODB_USER,
            DB_PASSWORD: process.env.MONGODB_PASSWORD,
        },
    },
}