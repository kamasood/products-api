require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

exports.getProducts = (count, page) => {
  return pool.query(
    `SELECT *
    FROM product
    WHERE id BETWEEN $1 AND $2`,
    [((page - 1) * count) + 1, page * count]
  );
}

exports.getProduct = (id) => {
  return pool.query(
    `SELECT
      *,
      (
        SELECT json_agg(features) features
        FROM
          (SELECT feature, value
          FROM features
          WHERE product_id = $1) features
      )
    FROM product p
    WHERE p.id = $1`,
    [id]
  );

  // TODO: cast default_price from "140" to "140.00"

}

// TODO: finish styles query
exports.getStyles = (id) => {
  return pool.query(
    // SELECT s.product_id, results: [{styleObjects}]

    `SELECT * FROM styles WHERE product_id = $1`,
    [id]
  );
}

exports.getRelated = (id) => {
  return pool.query(
    `SELECT array_agg(related) related
    FROM
      (SELECT related_product_id
        FROM related
        WHERE current_product_id = $1) related
    `,
    [id]
  );
}
