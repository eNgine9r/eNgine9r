const { fetchAdSpend } = require("../db/queries");

const listAdSpend = () => fetchAdSpend();

module.exports = {
  listAdSpend
};
