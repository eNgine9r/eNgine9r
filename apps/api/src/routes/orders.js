const express = require("express");
const { getOrders } = require("../logic/dashboard");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/orders", requireAuth, async (req, res, next) => {
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
