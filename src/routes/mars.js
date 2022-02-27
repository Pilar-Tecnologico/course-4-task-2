const express = require('express');
const router = express.Router();
const http = require('http');
const axios  = require("axios");
require('dotenv').config()
const API_KEY = process.env.API_KEY;
//COMPLETE the router
router.get('/manifests/:roverName',(req, res)=>{
      
  const roverName = req.params.roverName; 
  
  axios.get("https://api.nasa.gov/mars-photos/api/v1/manifests/"+roverName+"?api_key="+API_KEY)
    .then(function (response) {
      res.status(200).send(response.data.photo_manifest);
    })
    .catch(function (error) {
      
      res.status(400).json({
          code: "bad_request",
          message: "Bad request. Please check your parameters values"
      })
    })

});

module.exports = router;

