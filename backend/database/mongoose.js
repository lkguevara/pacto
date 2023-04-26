const mongoose = require("mongoose");
const productSchema = require("./schemas/productSchema");

mongoose.connect('mongodb://127.0.0.1:27017/marketplace');

const Product = mongoose.model("Product", productSchema)

module.exports = { Product }