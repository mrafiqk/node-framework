var express = require('express');
var router = express.Router();
var User = require('./user');

router.use('/user',User);

module.exports = router;
