const express = require('express');
const router = express();

router.get('/', function(req, res) {
  console.log("Iniciado ok");
  res.send('hello world');
});

module.exports = router;
