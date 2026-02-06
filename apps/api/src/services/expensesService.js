const { fetchExpenses } = require("../db/queries");

const listExpenses = () => fetchExpenses();

module.exports = {
  listExpenses
};
