const fs = require('fs');
const path = require('path');
const productSave = require('../controllers/products/productPost/DBProductSave');
const createUser = require('../controllers/DBUserCreate');

const productTest = async () => {
    const productsData = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf8');
    const data = JSON.parse(productsData);
    for (let element of data.products) {
        let newProduct = productSave(element, idUser, element.category, element.subCategory,)
    }
}


const userTest = async () => {
    const usersData = fs.readFileSync(path.resolve(__dirname, 'infoTestUser.json'), 'utf8');
    const data = JSON.parse(usersData);
    for (let element of data.users) {
        createUser(element)
    }
}

module.exports = { productTest, userTest }