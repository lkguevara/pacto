const Product = require("../../database/models/product");

const getProductId = async (idProduct) => {
  const productFind = await Product.findOne({ _id: idProduct });
  return productFind;
};

module.exports = getProductId;
