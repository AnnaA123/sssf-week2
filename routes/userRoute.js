'use strict';
//userRoute
const express = require('express');
const {user_list_get} = require('../controllers/userController.js');
const router = express.Router();

router.get('/', user_list_get);

router.get('/:id', (req, res) => {
  res.send('You requested a user whose id is ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('From this endpoint you can add users.');
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can change users.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can remove users.');
});

module.exports = router;
