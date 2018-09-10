var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('resume', {page:'MY RESUME', menuId:'resume'});
});

module.exports = router;
