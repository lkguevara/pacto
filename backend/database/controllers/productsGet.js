const Product = require("../models/product");

const getProductsAll = async () => {
  const res = await Product.find().lean();
  return res;
};

module.exports = getProductsAll;
