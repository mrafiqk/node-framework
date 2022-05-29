var express = require('express');
var router = express.Router();
var UserRequest = require('../requests/index.req');
var UserCtrl = require('../controller/user.ctrl');

router.get('/:id', (req, res) => { UserRequest.getRequest(['user'], UserCtrl, 'getUser', req, res) });

module.exports = router;
