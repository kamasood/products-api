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
    WHERE id = $1`,
    [id]
  );
}

exports.getStyles = (id) => {
  return pool.query(
    // SELECT s.product_id, results: [{styleObjects}]
    `SELECT
      id style_id,
      name,
      original_price,
      sale_price,
      default_style AS "default?",
      (
        SELECT json_agg(photos) photos
        FROM
          (SELECT thumbnail_url, url
            FROM photos
            WHERE style_id = $1) photos
      ),
      (
        SELECT json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.size)) skus
        FROM
          (SELECT id, quantity, size
            FROM skus
            WHERE style_id = $1) skus
      )
    FROM styles
    WHERE id = $1`,
    [id]
  );



  // SELECT
  //   id style_id,
  //   name,
  //   original_price,
  //   sale_price,
  //   default_style AS "default?",
  //   (
  //     SELECT json_agg(photos)
  //     FROM
  //       (SELECT thumbnail_url, url
  //       FROM photos
  //       WHERE style_id = 1) photos
  //   )
  // FROM styles
  // WHERE id = 1;
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
