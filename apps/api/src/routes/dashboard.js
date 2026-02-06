const express = require("express");
const { getDashboardMetrics } = require("../logic/dashboard");

const router = express.Router();

router.get("/dashboard", async (req, res, next) => {
  try {
    const metrics = await getDashboardMetrics();
    res.json({
      data: metrics
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
