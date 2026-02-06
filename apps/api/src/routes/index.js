const express = require("express");
const authRoutes = require("./auth");
const dashboardRoutes = require("./dashboard");
const ordersRoutes = require("./orders");
const productsRoutes = require("./products");
const adsRoutes = require("./ads");
const expensesRoutes = require("./expenses");

const router = express.Router();

router.use(authRoutes);
router.use(dashboardRoutes);
router.use(ordersRoutes);
router.use(productsRoutes);
router.use(adsRoutes);
router.use(expensesRoutes);

module.exports = router;
