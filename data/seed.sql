\copy product(id, name, slogan, description, category, default_price) FROM 'product.csv' WITH CSV HEADER;

\copy related(id, current_product_id, related_product_id)FROM 'related.csv' WITH CSV HEADER;

\copy features(id, product_id, feature, value) FROM 'features.csv' WITH CSV HEADER;

\copy styles(id, product_id, name, sale_price, original_price, default_style) FROM 'styles.csv' WITH CSV HEADER;

\copy photos(id, style_id, thumbnail_url, url) FROM 'photos.csv' WITH CSV HEADER;

\copy skus(id, style_id, size, quantity) FROM 'skus.csv' WITH CSV HEADER;
