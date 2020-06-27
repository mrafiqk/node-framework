var express = require('express');
var router = express.Router();
var UserRequest = require('../requests/user.req');

router.get('/:id', (req, res) => { UserRequest.getRequest('user', 'getUser', req, res) });

module.exports = router;
