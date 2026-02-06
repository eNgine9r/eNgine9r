const express = require("express");
const { getDashboardMetrics } = require("../logic/dashboard");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/dashboard", requireAuth, async (req, res, next) => {
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
