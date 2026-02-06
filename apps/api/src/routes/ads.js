const express = require("express");
const { getAdSpend } = require("../logic/dashboard");

const router = express.Router();

router.get("/ads", (req, res) => {
  const adSpend = getAdSpend();
  res.json({
    data: adSpend
  });
});

module.exports = router;
