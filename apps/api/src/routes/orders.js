const express = require("express");
const { getOrders } = require("../logic/dashboard");

const router = express.Router();

router.get("/orders", (req, res) => {
  const orders = getOrders();
  res.json({
    data: orders
  });
});

module.exports = router;
