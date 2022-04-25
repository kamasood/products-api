const pool = require ('../db');

exports.getProducts = (count, page) => {
  count = count || 5;
  page = page || 1;
  return pool.query(
    `SELECT *
    FROM product
    WHERE id BETWEEN $1 AND $2`,
    [((page - 1) * count) + 1, page * count]
  );
};

exports.getProduct = (id) => {
  return pool.query(
    `SELECT
      p.id,
      p.name,
      p.slogan,
      p.description,
      p.category,
      concat(p.default_price, '.00') default_price,
      json_agg(json_build_object('feature', f.feature, 'value', f.value)) features
    FROM product p
    JOIN features f
    ON p.id = f.product_id
    WHERE p.id = $1
    GROUP BY p.id;`,
    [id]
  );
};

exports.getStyles = (id) => {
  return pool.query(
    `SELECT
      s.id "style_id",
      s.name,
      s.original_price,
      s.sale_price,
      s.default_style "default?",
      p.photos,
      sk.skus
    FROM styles s
    JOIN (
      SELECT
        p.style_id,
        json_agg(json_build_object('url', p.url, 'thumbnail_url', p.thumbnail_url)) photos
      FROM photos p
      WHERE p.style_id IN (
        SELECT s.id
        FROM styles s
        WHERE s.product_id = $1
      )
      GROUP BY p.style_id
    ) p
    ON s.id = p.style_id
    JOIN (
      SELECT
        sk.style_id,
        json_object_agg(sk.id, json_build_object('quantity', sk.quantity, 'size', sk.size)) skus
      FROM skus sk
      WHERE sk.style_id IN (
        SELECT s.id
        FROM styles s
        WHERE s.product_id = $1
      )
      GROUP BY sk.style_id
    ) sk
    ON s.id = sk.style_id
    WHERE s.product_id = $1`,
    [id]
  );
};

exports.getRelated = (id) => {
  return pool.query(
    `SELECT
      array_agg(r.related_product_id) related
    FROM related r
    WHERE r.current_product_id = $1;`,
    [id]
  );
};
