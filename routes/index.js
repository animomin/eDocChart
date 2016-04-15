var express = require('express');
var router = express.Router();
var neo_server = require('../lib/neo_server.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  neo_server.checkServerInfo(function(result){
    res.render('index', result);
  });
});

module.exports = router;
