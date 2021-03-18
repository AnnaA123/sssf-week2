'use strict';
// authRoute
const express = require('express');
const {login} = require('../controllers/authController.js');
const {user_create_post} = require('../controllers/userController.js');
const router = express.Router();

router.post('/', user_create_post);

router.post('/login', login);

module.exports = router;
