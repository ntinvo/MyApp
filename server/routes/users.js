const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../db/models/user');

// Base users route
router.get('/', (req, res, next) => {
  res.send('Catch users route');
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
      res.json({ success: false, message: 'Failed to add user.'});
    } else {
      res.json({ success: true, message: 'Added user successfully.'});
    }
  });
});

// users/login route
router.get('/login', (req, res, next) => {
  res.send('Catch login route');
});

// users/profile route
router.get('/profile', (req, res, next) => {
  res.send('Catch users route');
});

module.exports = router;
