var express = require('express');
var routers = express.Router({
    mergeParams: true
});
var {scrapingData} = require('../controllers/index');

routers.get('/', function(req, res) {
  res.status(200).json()
});

routers.post("/",scrapingData);

routers.post('/', function(req, res) {
    res.status(200).json()
  });

module.exports = routers;
