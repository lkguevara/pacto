const mongoose = require("mongoose");

const { createMainCategories, Category } = require("./models/category");
const { userTest, productTest, QuestionTest, departmentsTest, rolesTest } = require("./mockData/testData");
const User = require("./models/user");
const Product = require("./models/product");
const Review = require("./models/review");
const Question = require("./models/question");
const Department = require("./models/department");
const City = require("./models/city");
const Role = require("./models/role");
require("dotenv").config()

// REVISAR ARCHIVO ENV EN DRIVE PARA TENER CREDENCIALES DE ACCESO 
const { MONGO_DB_URI } = process.env
mongoose.connect(MONGO_DB_URI);
//mongoose.connect("mongodb://127.0.0.1:27017/marketplace")

mongoose.connection.on("open", (_) => {
  console.log("Database is connected to Atlas");
});

mongoose.connection.on("error", (error) => {
  console.log('Error connection: ', error);
});




const load = async () => {
  await User.deleteMany();
  await Category.deleteMany();
  await Product.deleteMany();
  await Review.deleteMany();
  await Question.deleteMany();
  await Role.deleteMany();
  //await City.deleteMany();
  //await Department.deleteMany();

  //await departmentsTest();
  await rolesTest();
  await userTest();
  await createMainCategories();
  await productTest();
  await QuestionTest()

};

//load();

module.exports = mongoose.connection;
