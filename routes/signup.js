var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup', { head: 'Signup' });
});

module.exports = router;