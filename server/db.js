require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

exports.test = () => {
   return pool.query('SELECT * FROM product LIMIT $1', [5])
}

  // TODO:
  // db model queries
