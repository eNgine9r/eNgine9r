const express = require("express");
const { getAdSpend } = require("../logic/dashboard");

const router = express.Router();

router.get("/ads", async (req, res, next) => {
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
