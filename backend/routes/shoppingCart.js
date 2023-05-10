const express = require('express');
const router = express.Router();
const  shoppingCart  = require('../controllers/shoppingCart/shoppingCart.controller') 



router.post('/shoppingcart', (req,res)=> shoppingCart(req,res))

module.exports = router;