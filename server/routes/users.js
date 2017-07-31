const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../db/models/user');
const dbconfig = require('../db/config');

// Base users route
router.get('/', (req, res, next) => {
  res.send('Catch users route');
});

// Get profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({user: req.user});
});

// users/register route
router.post('/register', (req, res, next) => {
  let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(user, (error, user) => {
    if(error) {
      res.json({
        success: false,
        message: 'Failed to add user.'
      });
    } else {
      res.json({
        success: true,
        message: 'Added user successfully.'
      });
    }
  });
});

// Passport functions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// Login
router.post('/login', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // Get user by email
    User.getUserByEmail(email, (error, user) => {
      if(error) {
        throw error;
      }
      if(!user) {
        return res.json({
          success: false, message: 'User not found'
        });
      }

    // Compare password
    User.comparePasswords(password, user.password, (error, isMatch) => {
      if(error) {
        throw error;
      }
      if(isMatch) {
        const token = jwt.sign(user, dbconfig.secret, {
          expiresIn: 259200 // 3 days
        });

        return res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username
          }
        });
      } else {
        return res.json({
          success: false,
          message: 'Wrong password'
        });
      }
    });
  });
});

module.exports = router;
