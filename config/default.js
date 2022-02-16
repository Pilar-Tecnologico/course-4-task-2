require("dotenv").config();
module.exports = {
  services: {
    nasa: {
      hostname: "https://api.nasa.gov",
      api_key: process.env.NASA_API_KEY,
    },
  },
};
