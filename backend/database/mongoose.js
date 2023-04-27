const mongoose = require("mongoose");
const productSchema = require("./schemas/productSchema");
const userSchema = require("./schemas/userSchema");
const createMainCategories = require("./models/category");

mongoose.connect('mongodb://127.0.0.1:27017/marketplace');

const Product = mongoose.model("Product", productSchema)
const User = mongoose.model("User", userSchema)

createMainCategories()
module.exports = { Product }