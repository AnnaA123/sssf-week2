'use strict';
const jwt = require('jsonwebtoken');
const passport = require('../utils/pass.js');

const login = (req, res) => {
  // TODO: add passport authenticate
  passport.authenticate('local', {session: false}, (err, user, info) => {
    console.log('login info', info);
    if (err || !user) {
      return res.send('error');
    }

    req.login(user, {session: false}, (err) => {
      if (err) {
        return res.send('error');
      }

      // '1234' here is your private key
      const token = jwt.sign(user, '1234');
      return res.json({token: token});
    });
  })(req, res);
};

module.exports = {
  login,
};
