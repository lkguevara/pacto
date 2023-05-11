const mercadopago = require("mercadopago");

const paymentProducts = async (res, req) => {
  
  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  });

  try {
    const { products } = req.body;
    let preference = {
      items: [
        {
          id: products._id,
          tittle: products.name,
          currency_id: "COP",
          picture_url: products.images,
          description: products.description,
          category_id: products.category,
          quantity: products.quantity,
          unit_price: products.price,
      }],
      back_urls:{
        success: 'http://localhost:3000',
        failure: '',
        pending: '',
      },
      auto_return: 'approved',
      binary_mode: true
    };
    res.status(200).json("request mercadopago sucess");
  } catch (e) {}
};

module.exports = paymentProducts
