CREATE DATABASE products;
\c products;

-- PRODUCT --

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  slogan VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  default_price VARCHAR NOT NULL
);

-- RELATED --

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER NOT NULL REFERENCES product(id),
  related_product_id INTEGER DEFAULT NULL
);

-- FEATURES --

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES product(id),
  feature VARCHAR DEFAULT NULL,
  value VARCHAR DEFAULT NULL
);

-- STYLES --

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES product(id),
  name VARCHAR NOT NULL,
  sale_price VARCHAR DEFAULT NULL,
  original_price VARCHAR NOT NULL,
  default_style BOOLEAN DEFAULT NULL
);

-- PHOTOS --

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  thumbnail_url VARCHAR DEFAULT NULL,
  url VARCHAR DEFAULT NULL
);

-- SKUS --

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  size VARCHAR NOT NULL,
  quantity INTEGER DEFAULT NULL
);
