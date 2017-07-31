const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../db/models/user');
const dbconfig = require('../db/config');

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = dbconfig.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      User.getUserByEmail(jwt_payload._doc.email, (err, user) => {
          if (err) {
              return done(err, false);
          }
          if (user) {
              return done(null, user);
          } else {
              return done(null, false);
          }
      });
  }));
}
