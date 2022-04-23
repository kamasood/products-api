const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/products', (req, res) => {
  // parameters: page(integer), count(integer)
  // returns: JSON array of products, sorted by id, length of based on page/count parameters
  // fields: id, name, slogan, description, category, default_price (all strings, except id number)

  db.getProducts(req.query.count = 5, req.query.page = 1)
    .then(({rows}) => {
      res.send(rows);
    })
    .catch(err => console.log(err));

})

router.get('/products/:product_id', (req, res) => {
  // parameters: product_id(integer)
  // returns: JSON product object, where id matches product_id parameter
  // fields: id, name, slogan, description, category, default price, features (array of feature, value objects) (all strings, except id number)

  db.getProduct(req.params.product_id)
    .then(({rows}) => {
      res.send(rows[0]);
    })
    .catch(err => console.log(err));

})

router.get('/products/:product_id/styles', (req, res) => {
  // parameters: product_id(integer)
  // returns: JSON object of styles matching product_id parameter
  // fields: product_id(string), results (array of style objects)
    // style object fields: style_id(number), name, original_price, sale_price, "default?"(default_style, boolean), photos (array of photo objects), skus (object with sku keys, sku object values)
      // photo object fields: thumbnail_url, url
      // sku object values: quantity, size

  // consider a view for this query (or all queries)

  db.getStyles(req.params.product_id)
    .then(({rows}) => {
      res.send(rows);
    })
    .catch(err => console.log(err));

})

router.get('/products/:product_id/related', (req, res) => {
  // parameters: product_id(integer)
  // returns: JSON? array of related_product_id's (integers)

  db.getRelated(req.params.product_id)
    .then(({rows}) => {
      res.send(rows[0].related);
    })
    .catch(err => console.log(err));

});

module.exports = router;