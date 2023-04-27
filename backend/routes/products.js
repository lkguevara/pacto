const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/getAllProducts')

// GET all products
router.get('/products', (req, res, next) => getAllProducts(req, res))

// POST new user
router.post('/product', (req, res) => {res.status(200).json( {msg : "Producto creado"})})



module.exports = router;
