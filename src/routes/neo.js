const express = require('express');
const router = express.Router();
const axios  = require("axios");
require('dotenv').config()
const API_KEY = process.env.API_KEY;

//COMPLETE the router
router.get('/feed', (req, res)=>{

    const today = new Date().toISOString().substr(0,10);
    
    axios.get("https://api.nasa.gov/neo/rest/v1/feed/?api_key="+API_KEY+"&start_date="+today+"&end_date"+today)
    .then(function (response) {
        res.status(200).send(response);
    })
    .catch(function (error) {
      
        res.status(500).json({
            "code": "internal_server_error",
            "message": "Something went wrong"
        })
    })

});


module.exports = router;
