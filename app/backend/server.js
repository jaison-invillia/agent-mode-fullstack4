const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', productsRouter);

app.listen(PORT, () => {
  console.log(`Products API listening on port ${PORT}`);
});
