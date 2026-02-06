const { listOrders } = require("../services/ordersService");
const { listProducts } = require("../services/productsService");
const { listAdSpend } = require("../services/adSpendService");
const { listExpenses } = require("../services/expensesService");
const {
  fetchRevenueTotal,
  fetchAdSpendTotal,
  fetchFixedMonthlyExpensesTotal
} = require("../db/queries");
const {
  calculateFixedExpensesPerDay,
  calculateProfit,
  calculateRoas,
  calculateMarginPercent
} = require("./metrics");

const getDashboardMetrics = async () => {
  const [orders, products, adSpend, expenses, revenue, totalAdSpend, fixedMonthly] =
    await Promise.all([
      listOrders(),
      listProducts(),
      listAdSpend(),
      listExpenses(),
      fetchRevenueTotal(),
      fetchAdSpendTotal(),
      fetchFixedMonthlyExpensesTotal()
    ]);

  const fixedExpensesPerDay = calculateFixedExpensesPerDay(fixedMonthly);
  const profit = calculateProfit(revenue, totalAdSpend, fixedExpensesPerDay);
  const roas = calculateRoas(revenue, totalAdSpend);
  const marginPercent = calculateMarginPercent(revenue, profit);

  return {
    revenue,
    adSpend: totalAdSpend,
    fixedExpensesPerDay,
    profit,
    roas,
    marginPercent,
    ordersCount: orders.length,
    productsCount: products.length
  };
};

const getOrders = () => listOrders();
const getProducts = () => listProducts();
const getAdSpend = () => listAdSpend();
const getExpenses = () => listExpenses();

module.exports = {
  getDashboardMetrics,
  getOrders,
  getProducts,
  getAdSpend,
  getExpenses
};
