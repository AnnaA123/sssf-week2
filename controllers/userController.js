'use strict';
// userController
const userModel = require('../models/userModel.js');

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  let user = JSON.parse(JSON.stringify(users));
  res.send(user.filter((use) => use.id === req.params.id));
};

module.exports = {
  user_list_get,
  user_get,
};
