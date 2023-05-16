const express = require('express');
const router = express.Router();
const getStateOrder = require('../controllers/transactions/getStateOrder.controller')

//Add products at shopping cart user
router.get('/transactions', (req, res) => getStateOrder(req,res));

module.exports = router;