const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/product/APIgetAllProducts')
const {getProductById} = require('../controllers/product/APIgetProductById');

// GET all products
router.get('/products', (req, res, next) => getAllProducts(req, res))

//GET Product by id
router.get('/product', (req, res, next) => getProductById(req, res));

// POST new user
router.post('/product', (req, res) => {res.status(200).json( {msg : "Producto creado"})})



module.exports = router;
