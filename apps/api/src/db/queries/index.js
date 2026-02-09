const { all, get } = require("../connection");

const fetchOrders = () =>
  all(
    `SELECT id, user_id as userId, product_id as productId, quantity, total, currency,
            product_cost as productCost, delivery_cost as deliveryCost, ad_cost as adCost,
            ordered_at as orderedAt
     FROM orders
     ORDER BY ordered_at`
  );

const fetchProducts = () =>
  all(
    `SELECT id, name, price, cost_price as costPrice, currency
     FROM products
     ORDER BY name`
  );

const fetchAdSpend = () =>
  all(
    `SELECT id, channel, amount, currency, spend_date as date
     FROM ad_spend
     ORDER BY spend_date`
  );

const fetchExpenses = () =>
  all(
    `SELECT id, name, amount, currency, cadence, type, effective_month as effectiveMonth, incurred_on as incurredOn
     FROM expenses
     ORDER BY COALESCE(incurred_on, effective_month)`
  );

const fetchRevenueTotal = async () => {
  const row = await get("SELECT COALESCE(SUM(total), 0) as revenue FROM orders");
  return row?.revenue ?? 0;
};

const fetchAdSpendTotal = async () => {
  const row = await get("SELECT COALESCE(SUM(amount), 0) as total FROM ad_spend");
  return row?.total ?? 0;
};

const fetchFixedMonthlyExpensesTotal = async () => {
  const row = await get(
    "SELECT COALESCE(SUM(amount), 0) as total FROM expenses WHERE type = 'fixed' AND cadence = 'monthly'"
  );
  return row?.total ?? 0;
};

const fetchProductCostTotal = async () => {
  const row = await get("SELECT COALESCE(SUM(product_cost), 0) as total FROM orders");
  return row?.total ?? 0;
};

const fetchDeliveryCostTotal = async () => {
  const row = await get("SELECT COALESCE(SUM(delivery_cost), 0) as total FROM orders");
  return row?.total ?? 0;
};

const fetchOrderAdCostTotal = async () => {
  const row = await get("SELECT COALESCE(SUM(ad_cost), 0) as total FROM orders");
  return row?.total ?? 0;
};

module.exports = {
  fetchOrders,
  fetchProducts,
  fetchAdSpend,
  fetchExpenses,
  fetchRevenueTotal,
  fetchAdSpendTotal,
  fetchFixedMonthlyExpensesTotal,
  fetchProductCostTotal,
  fetchDeliveryCostTotal,
  fetchOrderAdCostTotal
};
