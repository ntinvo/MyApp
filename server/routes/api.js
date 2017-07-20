const express = require('express');
const router = express.Router();

// Base api route
router.get('/', (req, res, next) => {
  res.send('API');
});

module.exports = router;
