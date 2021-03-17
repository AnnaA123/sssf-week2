'use strict';
// catController
const catModel = require('../models/catModel.js');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  let cat = JSON.parse(JSON.stringify(cats));
  res.send(cat.filter((kitty) => kitty.id === req.params.id));
};

module.exports = {
  cat_list_get,
  cat_get,
};
