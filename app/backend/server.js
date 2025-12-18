const express = require('express');
const cors = require('cors');
const products = require('./mocks/products.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health-check', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Products API listening on port ${PORT}`);
});
