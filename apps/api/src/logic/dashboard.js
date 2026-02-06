const { listOrders } = require("../services/ordersService");
const { listProducts } = require("../services/productsService");
const { listAdSpend } = require("../services/adSpendService");
const { listExpenses } = require("../services/expensesService");
const {
  calculateRevenue,
  calculateAdSpend,
  calculateFixedExpensesPerDay,
  calculateProfit,
  calculateRoas,
  calculateMarginPercent
} = require("./metrics");

const getDashboardMetrics = () => {
  const orders = listOrders();
  const products = listProducts();
  const adSpend = listAdSpend();
  const expenses = listExpenses();

  const revenue = calculateRevenue(orders);
  const totalAdSpend = calculateAdSpend(adSpend);
  const fixedExpensesPerDay = calculateFixedExpensesPerDay(expenses);
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
