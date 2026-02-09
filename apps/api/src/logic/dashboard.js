const { listOrders } = require("../services/ordersService");
const { listProducts } = require("../services/productsService");
const { listAdSpend } = require("../services/adSpendService");
const { listExpenses } = require("../services/expensesService");
const {
  fetchRevenueTotal,
  fetchAdSpendTotal,
  fetchFixedMonthlyExpensesTotal,
  fetchProductCostTotal,
  fetchDeliveryCostTotal,
  fetchOrderAdCostTotal
} = require("../db/queries");
const {
  calculateFixedExpensesPerDay,
  calculateFixedExpensesForPeriod,
  calculateProfit,
  calculateRoas,
  calculateMarginPercent
} = require("./metrics");

const getDaysInPeriod = (orders, fallbackDays = 30) => {
  if (!orders.length) {
    return fallbackDays;
  }

  const timestamps = orders
    .map((order) => new Date(order.orderedAt).getTime())
    .filter((value) => !Number.isNaN(value));

  if (!timestamps.length) {
    return fallbackDays;
  }

  const min = Math.min(...timestamps);
  const max = Math.max(...timestamps);
  const diff = Math.ceil((max - min) / (1000 * 60 * 60 * 24)) + 1;

  return diff > 0 ? diff : fallbackDays;
};

const getDashboardMetrics = async () => {
  const [
    orders,
    products,
    adSpend,
    expenses,
    revenue,
    totalAdSpend,
    fixedMonthly,
    productCostTotal,
    deliveryCostTotal,
    orderAdCostTotal
  ] = await Promise.all([
    listOrders(),
    listProducts(),
    listAdSpend(),
    listExpenses(),
    fetchRevenueTotal(),
    fetchAdSpendTotal(),
    fetchFixedMonthlyExpensesTotal(),
    fetchProductCostTotal(),
    fetchDeliveryCostTotal(),
    fetchOrderAdCostTotal()
  ]);

  const daysInPeriod = getDaysInPeriod(orders);
  const fixedExpensesPerDay = calculateFixedExpensesPerDay(fixedMonthly);
  const fixedExpenses = calculateFixedExpensesForPeriod(
    fixedExpensesPerDay,
    daysInPeriod
  );
  const profit = calculateProfit({
    revenue,
    productCost: productCostTotal,
    deliveryCost: deliveryCostTotal,
    adSpend: totalAdSpend + orderAdCostTotal,
    fixedExpenses
  });
  const roas = calculateRoas(revenue, totalAdSpend + orderAdCostTotal);
  const marginPercent = calculateMarginPercent(revenue, profit);

  return {
    revenue,
    adSpend: totalAdSpend + orderAdCostTotal,
    fixedExpensesPerDay,
    fixedExpenses,
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
