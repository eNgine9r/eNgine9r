const express = require("express");
const { getExpenses } = require("../logic/dashboard");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/expenses", requireAuth, async (req, res, next) => {
  try {
    const expenses = await getExpenses();
    res.json({
      data: expenses
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
