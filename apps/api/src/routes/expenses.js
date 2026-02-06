const express = require("express");
const { getExpenses } = require("../logic/dashboard");

const router = express.Router();

router.get("/expenses", (req, res) => {
  const expenses = getExpenses();
  res.json({
    data: expenses
  });
});

module.exports = router;
