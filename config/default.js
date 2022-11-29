require("dotenv").config();
module.exports = {
    services:{
        nasa:{
            hostname: "https://api.nasa.gov",
            apod_path: "/neo/rest/v1/feed",
            apod_path_mars: "/mars-photos/api/v1/manifests/",
            api_key: process.env.API_KEY,
        }
    }    
}

