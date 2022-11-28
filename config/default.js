require('dotenv').config();
module.exports = {
    services: {
        nasa: {
            hostname: 'https://api.nasa.gov',
            manifest: '/mars-photos/api/v1/manifests',
            apikey: process.env.API_KEY,
        }
    }
}