const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/token/verifyToken');
const  shoppingCart  = require('../controllers/shoppingCart/shoppingCart.controller') 
// const getShoppingCart = require('../controllers/shoppingCart/getShoppingCart.controller')


//Add products at shopping cart user
router.post('/shoppingcart',verifyToken, (req,res)=> shoppingCart(req,res))
//Add products at shopping cart user
// router.get('/shoppingcart',verifyToken, (req,res)=> getShoppingCart(req,res))

module.exports = router;