const express = require('express');
const products = require('../mocks/products.json');

const router = express.Router();

router.get('/products', (req, res) => {
  res.json(products);
});

module.exports = router;
