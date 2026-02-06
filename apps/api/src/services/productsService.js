const { fetchProducts } = require("../db/queries");

const listProducts = () => fetchProducts();

module.exports = {
  listProducts
};
