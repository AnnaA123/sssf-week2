'use strict';
// catRoute
const express = require('express');
const {cat_list_get} = require('../controllers/catController.js');
const {cat_get} = require('../controllers/catController.js');
const router = express.Router();

router.get('/', cat_list_get);

router.get('/:id', cat_get);

/* test */

router.post('/', (req, res) => {
  res.send('From this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can change cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can remove cats.');
});

module.exports = router;
