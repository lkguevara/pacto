const mongoose = require("mongoose");

const { createMainCategories, Category } = require("./models/category");
const DBProductGetCategory = require("./controllers/products/productGet/handlers/DBProductGetCategory");
const { userTest, productTest } = require("./mockData/testData");
const User = require("./models/user");
const Product = require("./models/product");
const DBUserVerified = require("./controllers/users/userPost/DBUserVerified");
require("dotenv").config()

// REVISAR ARCHIVO ENV EN DRIVE PARA TENER CREDENCIALES DE ACCESO 
const { MONGO_DB_URI } = process.env
mongoose.connect(MONGO_DB_URI);

mongoose.connection.on("open", (_) => {
  console.log("Database is connected to Atlas");
});

mongoose.connection.on("error", (error) => {
  console.log('Error connection: ', error);
});

const load = async () => {
  await User.deleteMany()
  await Category.deleteMany()
  await Product.deleteMany()
  await userTest();
  await createMainCategories();
  await productTest();
};

load();

module.exports = mongoose.connection;
