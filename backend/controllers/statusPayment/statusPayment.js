const axios = require("axios");

const statusPayment = async (req, res) => {
    const id = req.query['data.id'];
    const type = req.query.type;
    const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;


    if (type && type === 'payment') {
        // Aquí puedes verificar el estado del pago con el ID correspondiente
        // y enviar la confirmación a MercadoPago si corresponde
    
        const payment = await axios.get(`https://api.mercadopago.com/v1/payments/${id}?access_token=${MERCADOPAGO_ACCESS_TOKEN}`)

        if (payment.data.status === 'approved') {
            // Aquí puedes hacer el envío de la confirmación de pago a MercadoPago
            console.log('transferencia aprovada')
            return res.send('OK');
          }
      }
    
      res.send('OK');
};

module.exports = statusPayment;
