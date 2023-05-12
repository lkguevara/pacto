const mercadopago = require("mercadopago");

const createPayment = async (req, res) => {

  const { emailUser, items } = req.body;

  console.log(emailUser);
  console.log(items);

  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  });

  const preference = {
    payer_email: emailUser,
    items,
    back_urls: {
      success: process.env.CLIENT_URL,
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  try {
    const respuesta = await mercadopago.preferences.create(preference);
    return res.status(200).json(respuesta);
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, msg: "Error al realizar el pago" });
  }

};

module.exports = createPayment;
