const express = require("express");
const { getProducts } = require("../logic/dashboard");

const router = express.Router();

router.get("/products", (req, res) => {
  const products = getProducts();
  res.json({
    data: products
  });
});

module.exports = router;
