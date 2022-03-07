require('dotenv').config();
module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            apikey: process.env.NASA_API || 'DEMO_KEY',
        },
        database: {
            host: process.env.DB_HOST || '',
            dbName: process.env.DB_NAME || '',
            dbUser: process.env.DB_USER || '',
            dbPass: process.env.DB_PASS || ''
        }
    }
}