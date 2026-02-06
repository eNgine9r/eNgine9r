const { fetchOrders } = require("../db/queries");

const listOrders = () => fetchOrders();

module.exports = {
  listOrders
};
