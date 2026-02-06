const express = require("express");
const { getAdSpend } = require("../logic/dashboard");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/ads", requireAuth, async (req, res, next) => {
  try {
    const adSpend = await getAdSpend();
    res.json({
      data: adSpend
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
