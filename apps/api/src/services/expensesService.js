const { expenses } = require("../db/data");

const listExpenses = () => expenses;

module.exports = {
  listExpenses
};
