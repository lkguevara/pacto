const fs = require('fs');
const path = require('path');
const productSave = require('../controllers/products/productPost/DBProductSave');
const createUser = require('../controllers/users/userPost/DBUserCreate');
const User = require('../models/user');
const Question = require('../models/question');
const Product = require('../models/product');
const DBQuestionPost = require('../controllers/questions/questionPost/DBQuestionPost');
const DBQuestionReply = require('../controllers/questions/questionPost/DBQuestionReply');




const productTest = async () => {
    const productsData = fs.readFileSync(path.resolve(__dirname, 'infoTestProduct.json'), 'utf8');
    const data = JSON.parse(productsData);
    const userId = await User.findOne({ email: "laaraña@mail.com" })
    for (let element of data.products) {
        await productSave(element, userId._id)

    }
}


const userTest = async () => {
    const usersData = fs.readFileSync(path.resolve(__dirname, 'infoTestUser.json'), 'utf8');
    const data = JSON.parse(usersData);
    for (let element of data.users) {
        await createUser(element)
    }
}

const QuestionTest = async () => {
    const vendorId = await User.findOne({ email: "laaraña@mail.com" })
    const userId = await User.findOne({ email: "fitopaez@mail.com" })
    const productId = await Product.findOne()

    const Question = {
        question: "Soy una pregunta random",
        date: Date()
    }
    const Reply = {
        answer: "Soy una respuesta random a una pregunta random",
        date: Date()
    }
    for (let cont = 0; cont < 10; cont++) {

        const questionId = await DBQuestionPost(userId._id, Question, productId._id)
        await DBQuestionReply(vendorId._id, Reply, questionId._id)
    }
}

module.exports = { productTest, userTest, QuestionTest }