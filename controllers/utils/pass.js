const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const {getUserLogin} = require('../models/userModel.js');

passport.use(
  new Strategy((username, password, done) => {
    // get user by username from getUserLogin
    const user = getUserLogin();
    // if user is undefined
    if (user === undefined) {
      return done(null, false);
    }
    // if passwords dont match
    if (user.password !== password) {
      return done(null, false);
    }
    // if all is ok
    return done(null, user.id);
  })
);
