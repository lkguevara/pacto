const Product = require("../../database/models/product");

const getProductsAll = async () => {
  const res = await Product.find();
  return res;
};

module.exports = getProductsAll;
