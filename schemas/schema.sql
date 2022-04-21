CREATE DATABASE products;
\c products;

-- PRODUCT --

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  slogan VARCHAR(120) NOT NULL,
  description VARCHAR(600) NOT NULL,
  category VARCHAR(30) NOT NULL,
  default_price VARCHAR(30) NOT NULL
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
  feature VARCHAR(30) DEFAULT NULL,
  value VARCHAR(30) DEFAULT NULL
);

-- STYLES --

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES product(id),
  name VARCHAR(30) NOT NULL,
  sale_price VARCHAR(30) DEFAULT NULL,
  original_price VARCHAR(30) NOT NULL,
  default_style BOOLEAN DEFAULT NULL
);

-- PHOTOS --

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  thumbnail_url VARCHAR(240) DEFAULT NULL,
  url VARCHAR(240) DEFAULT NULL
);

-- SKUS --

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  size VARCHAR(30) NOT NULL,
  quantity INTEGER DEFAULT NULL
);
