'use strict';
// userController
const userModel = require('../models/userModel.js');

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  res.send(users.filter((user) => user.id === req.params.id));
};

const user_create_post = (req, res) => {
  console.log(req.body);
  res.send('From this endpoint you can add users.');
};

module.exports = {
  user_list_get,
  user_get,
  user_create_post,
};
