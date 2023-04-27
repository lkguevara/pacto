const Product = require("../models/product");

const getProductId = async (idProduct) => {
  const productFind = await Product.findOne({ _id: idProduct });
  return productFind;
};

module.exports = getProductId;
