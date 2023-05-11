const express = require('express');
const paymentProducts = require('../controllers/mercadopago/APIpayment');
const router = express.Router();

//La funcion paymentProducts envia los productos que se encontraban en el carrito para su pago y llega por body
router.post('/payment', (req, res) => paymentProducts(req, res))


module.exports = router;
