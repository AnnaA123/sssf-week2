'use strict';
// catRoute
const express = require('express');
const {
  cat_list_get,
  cat_get,
  cat_create_post,
} = require('../controllers/catController.js');
const multer = require('multer');
const router = express.Router();

const upload = multer({dest: 'uploads/'});

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('avatar'), cat_create_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can change cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can remove cats.');
});

module.exports = router;
