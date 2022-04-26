const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

// CORS middleware
app.use(cors());

// JSON middleware
app.use(express.json());

// incoming requests run through routes.js file
app.use(router);

const port = 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
