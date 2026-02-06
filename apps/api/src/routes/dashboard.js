const express = require("express");
const { getDashboardMetrics } = require("../logic/dashboard");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  const metrics = getDashboardMetrics();
  res.json({
    data: metrics
  });
});

module.exports = router;
