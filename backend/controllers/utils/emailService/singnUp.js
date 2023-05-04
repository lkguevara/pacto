const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = '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'

sgMail.setApiKey(SENDGRID_API_KEY);


function sendWelcomeEmail(email) {
  const msg = {
    to: 'edwardraga@icloud.com',
    from: 'pactopf@gmail.com',
    templateId: 'd-5f799592b02c46a185266acad27eb024',
    dynamic_template_data: {
      name: "Nombre del usuario registrado",
      product_name: 'Nombre del producto que se está promocionando',
      product_description: 'Descripción del producto que se está promocionando',
      // más datos dinámicos aquí...
    },
  };
  sgMail.send(msg);
}

sendWelcomeEmail()