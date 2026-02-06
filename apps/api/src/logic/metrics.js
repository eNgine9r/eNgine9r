const calculateFixedExpensesPerDay = (fixedMonthlyTotal, daysInMonth = 30) =>
  daysInMonth > 0 ? fixedMonthlyTotal / daysInMonth : 0;

const calculateProfit = (revenue, adSpend, fixedExpensesPerDay) =>
  revenue - adSpend - fixedExpensesPerDay;

const calculateRoas = (revenue, adSpend) =>
  adSpend > 0 ? revenue / adSpend : 0;

const calculateMarginPercent = (revenue, profit) =>
  revenue > 0 ? (profit / revenue) * 100 : 0;

module.exports = {
  calculateFixedExpensesPerDay,
  calculateProfit,
  calculateRoas,
  calculateMarginPercent
};
