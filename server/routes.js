const express = require('express');
const controllers = require('./controllers');
const db = require('./db');
const router = express.Router();

router.get('/products', controllers.getAllProducts);

router.get('/products/:product_id', controllers.getOneProduct);

router.get('/products/:product_id/styles', controllers.getProductStyles);

router.get('/products/:product_id/related', controllers.getRelatedProducts);

module.exports = router;
