'use strict';
// authRoute
const express = require('express');
const {user_create_post} = require('../controllers/userController.js');
const router = express.Router();

router.post('/', user_create_post);

router.post('/login', user_create_post);

module.exports = router;
