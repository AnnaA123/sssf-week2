'use strict';
// catController
const catModel = require('../models/catModel.js');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  res.json(cats.filter(({id}) => res.params.id));
  //res.json(cats.filter(check_cat));
  //res.send(cats.filter(check_cat));
  /*res.send('You asked for cat number ' + req.params.id + '. JSON ');
  cat_list = res.json(cats);

  cat = cat_list.filter(check_cat);*/
};

module.exports = {
  cat_list_get,
  cat_get,
};
