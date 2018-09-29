var express = require('express');
var router = express.Router();

/* GET home page./all entries */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Latest Entry ' });
});

module.exports = router;
