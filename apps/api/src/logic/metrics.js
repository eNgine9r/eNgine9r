const calculateFixedExpensesPerDay = (fixedMonthlyTotal, daysInMonth = 30) =>
  daysInMonth > 0 ? fixedMonthlyTotal / daysInMonth : 0;

const calculateFixedExpensesForPeriod = (fixedExpensesPerDay, daysInPeriod) =>
  daysInPeriod > 0 ? fixedExpensesPerDay * daysInPeriod : 0;

const calculateProfit = ({
  revenue,
  productCost,
  deliveryCost,
  adSpend,
  fixedExpenses
}) => revenue - productCost - deliveryCost - adSpend - fixedExpenses;

const calculateRoas = (revenue, adSpend) =>
  adSpend > 0 ? revenue / adSpend : 0;

const calculateMarginPercent = (revenue, profit) =>
  revenue > 0 ? (profit / revenue) * 100 : 0;

module.exports = {
  calculateFixedExpensesPerDay,
  calculateFixedExpensesForPeriod,
  calculateProfit,
  calculateRoas,
  calculateMarginPercent
};
