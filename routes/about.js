var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', {page:'ABOUT ME', menuId:'about'});
});

module.exports = router;
