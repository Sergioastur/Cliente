var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '2025', subtitle: 'Feliz Año' });
});

module.exports = router;
