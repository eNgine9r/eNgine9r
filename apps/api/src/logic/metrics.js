const calculateRevenue = (orders) =>
  orders.reduce((total, order) => total + order.total, 0);

const calculateAdSpend = (adSpend) =>
  adSpend.reduce((total, record) => total + record.amount, 0);

const calculateFixedExpensesPerDay = (expenses, daysInMonth = 30) => {
  const fixedMonthly = expenses
    .filter((expense) => expense.type === "fixed" && expense.cadence === "monthly")
    .reduce((total, expense) => total + expense.amount, 0);

  return daysInMonth > 0 ? fixedMonthly / daysInMonth : 0;
};

const calculateProfit = (revenue, adSpend, fixedExpensesPerDay) =>
  revenue - adSpend - fixedExpensesPerDay;

const calculateRoas = (revenue, adSpend) =>
  adSpend > 0 ? revenue / adSpend : 0;

const calculateMarginPercent = (revenue, profit) =>
  revenue > 0 ? (profit / revenue) * 100 : 0;

module.exports = {
  calculateRevenue,
  calculateAdSpend,
  calculateFixedExpensesPerDay,
  calculateProfit,
  calculateRoas,
  calculateMarginPercent
};
