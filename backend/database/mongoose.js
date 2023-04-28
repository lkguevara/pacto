const mongoose = require("mongoose");

const { createMainCategories } = require("./models/category");
const DBProductGetCategory = require("./controllers/products/productGet/DBProductGetCategory");
const { userTest, productTest } = require("./mockData/testData");



mongoose.connect('mongodb://127.0.0.1:27017/marketplace');

const load = async () => {
    await userTest()
    await createMainCategories()
    await productTest()
}

load()

module.exports = mongoose.connection