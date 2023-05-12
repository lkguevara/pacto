const express = require('express');
const router = express.Router();
const createPayment = require('../controllers/mercadopago/APIpaymentMerPago');

//La funcion paymentProducts envia los productos que se encontraban en el carrito para su pago y llega por body junto con el email del usuario comprador

router.post('/payment', (req, res) =>  createPayment(req, res));

module.exports = router;
