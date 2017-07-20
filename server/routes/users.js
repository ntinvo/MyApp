const express = require('express');
const router = express.Router();

// Base users route
router.get('/', (req, res, next) => {
  res.send('Catch users route');
});

// users/register route
router.post('/register', (req, res, next) => {
  res.send('Catch register route');
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
