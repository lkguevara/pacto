const fs = require('fs');
const path = require('path');
const productSave = require('../controllers/products/productPost/DBProductSave');
const createUser = require('../controllers/DBUserCreate');
const User = require('../models/user');



const productTest = async () => {
    const productsData = fs.readFileSync(path.resolve(__dirname, 'infoTestProduct.json'), 'utf8');
    const data = JSON.parse(productsData);
    for (let element of data.products) {
        const userId = await User.findOne({ name: "Julian Alvarez" })
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

module.exports = { productTest, userTest }