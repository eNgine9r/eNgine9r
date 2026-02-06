const express = require("express");
const { getOrders } = require("../logic/dashboard");

const router = express.Router();

router.get("/orders", async (req, res, next) => {
  try {
    const orders = await getOrders();
    res.json({
      data: orders
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
