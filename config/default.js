require("dotenv").config();
module.exports = {
    services:{
        nasa:{
            hostname: "https://api.nasa.gov/",
            apod_path: "/neo/rest/v1/feed",
            api_key: process.env.API_KEY,
        }
    }
}