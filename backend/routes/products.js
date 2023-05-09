const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/product/APIgetAllProducts')
const {getProductById} = require('../controllers/product/APIgetProductById');
const {deleteProductById} = require('../controllers/product/APIdeleteProduct');
const {postNewProduct} = require('../controllers/product/APIpostNewProduct');
const {getProductsByFilters} = require('../controllers/product/APIgetProductByFilters');
const getProductByName = require('../controllers/product/APIgetProductByName');
const middlewarePostNewProduct = require('../middlewares/productMiddleware')
const {autoLogin} = require('../middlewares/autoLoginMiddleware');

// GET all products
//router.get('/products', (req, res, next) => getAllProducts(req, res));

//La funcion getProductsByFilters trae todos los productos si se manda un query por defecto
router.get('/products', (req, res, next) => getProductsByFilters(req, res))

//GET Product by id
router.get('/product', (req, res, next) => getProductById(req, res));

//DELETE a product by id
router.delete('/product', (req, res, next) => deleteProductById(req, res))

// POST new user
router.post('/product', middlewarePostNewProduct, (req, res) => postNewProduct(req, res))

//GET Product by name
router.get('/productsname', (req, res, next) => getProductByName(req, res));


module.exports = router;
