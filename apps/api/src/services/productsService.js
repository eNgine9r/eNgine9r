const { products } = require("../db/data");

const listProducts = () => products;

module.exports = {
  listProducts
};
