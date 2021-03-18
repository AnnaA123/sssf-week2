'use strict';
// catController
const catModel = require('../models/catModel.js');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  res.send(cats.filter((cat) => cat.id === req.params.id));
};

const cat_create_post = (req, res) => {
  console.log('text data' + req.body);
  console.log('file data' + req.file);
  res.send('From this endpoint you can add cats.');
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post,
};
