const mongoose = require("mongoose");

const { createMainCategories } = require("./models/category");
const DBProductGetCategory = require("./controllers/products/productGet/DBProductGetCategory");
const { userTest } = require("./mockData/testData");



mongoose.connect('mongodb://127.0.0.1:27017/marketplace');

createMainCategories()


//Fito Paez = 644c29a4aaff7bf57c2a0a06
//Julian Alvarez =644c29a4aaff7bf57c2a0a07
//Charly Garcia = 644c29a4aaff7bf57c2a0a08
//Carlos Gardel = 644c29a4aaff7bf57c2a0a09
//Lionel Messi = 644c29a4aaff7bf57c2a0a0a
module.exports = mongoose.connection