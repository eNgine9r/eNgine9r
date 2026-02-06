const { orders } = require("../db/data");

const listOrders = () => orders;

module.exports = {
  listOrders
};
