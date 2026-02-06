const express = require("express");
const { getProducts } = require("../logic/dashboard");

const router = express.Router();

router.get("/products", async (req, res, next) => {
  try {
    const products = await getProducts();
    res.json({
      data: products
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
