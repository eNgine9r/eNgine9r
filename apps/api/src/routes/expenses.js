const express = require("express");
const { getExpenses } = require("../logic/dashboard");

const router = express.Router();

router.get("/expenses", async (req, res, next) => {
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
