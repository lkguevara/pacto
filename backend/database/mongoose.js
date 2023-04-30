const mongoose = require("mongoose");

const { createMainCategories } = require("./models/category");
const DBProductGetCategory = require("./controllers/products/productGet/DBProductGetCategory");
const { userTest, productTest } = require("./mockData/testData");

const uri = "mongodb://127.0.0.1:27017/marketplace";

mongoose.connect(uri);

mongoose.connection.on("open", (_) => {
  console.log("Database is connected to => ", uri);
});

mongoose.connection.on("error", (error) => {
  console.log('Error connection: ', error);
});

const load = async () => {

  await userTest();
  await createMainCategories();
  await productTest();
};


//load();

module.exports = mongoose.connection;
