require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TEMPLATE_ID_SIGNUP = process.env.SENDGRID_TEMPLATE_ID_SIGNUP;


sgMail.setApiKey(SENDGRID_API_KEY);


function sendWelcomeEmail(email,code) {

  const msg = {
    to: "edwardraga@icloud.com",
    from: 'pactopf2023@gmail.com',
    templateId: SENDGRID_TEMPLATE_ID_SIGNUP,
    dynamic_template_data: {
      code: 564545,
      // más datos dinámicos aquí...
    },
    
  };

  sgMail.send(msg);
}



module.exports = sendWelcomeEmail