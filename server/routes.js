const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/products', (req, res) => {
  db.test()
    .then(res => console.log(res))
    .catch(err => console.log(err.stack));
})

// TODO:
// Handle endpoints

module.exports = router;