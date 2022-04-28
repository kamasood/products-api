const db = require('../models');

exports.getAllProducts = (req, res) => {
  db.getProducts(req.query.count, req.query.page)
    .then(({rows}) => {
      res.send(rows);
    })
    .catch(err => res.sendStatus(404));
};

exports.getOneProduct = (req, res) => {
  db.getProduct(req.params.product_id)
    .then(({rows}) => {
      res.send(rows[0]);
    })
    .catch(err => res.sendStatus(404));
};

exports.getProductStyles = (req, res) => {
  db.getStyles(req.params.product_id)
    .then(({rows}) => {
      res.send({
        product_id: req.params.product_id,
        results: rows
      });
    })
    .catch(err => res.sendStatus(404););
};

exports.getRelatedProducts = (req, res) => {
  db.getRelated(req.params.product_id)
    .then(({rows}) => {
      res.send(rows[0].related);
    })
    .catch(err => res.sendStatus(404));
};
