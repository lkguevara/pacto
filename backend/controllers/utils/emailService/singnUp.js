require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID;


sgMail.setApiKey(SENDGRID_API_KEY);


function sendWelcomeEmail(email,code) {

  const msg = {
    to: "edwardraga@icloud.com",
    from: 'pactopf@gmail.com',
    templateId: SENDGRID_TEMPLATE_ID,
    dynamic_template_data: {
      code: code,
      product_name: 'Nombre del producto que se está promocionando',
      product_description: 'Descripción del producto que se está promocionando',
      // más datos dinámicos aquí...
    },
    
  };

  console.log(msg);
  sgMail.send(msg);
}


module.exports = sendWelcomeEmail