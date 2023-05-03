const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = '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';

sgMail.setApiKey(SENDGRID_API_KEY);

sgMail.setApiKey(SENDGRID_API_KEY);

function sendRecoveryPassEmail(email) {
  const msg = {
    to: 'edwardraga@icloud.com',
    from: 'pactopf@gmail.com',
    templateId: 'd-853624ec6bf14c5bac0fc5eb37925167',
    dynamic_template_data: {
      name: "Nombre del usuario registrado",
    },
  };
  sgMail.send(msg);
}

sendRecoveryPassEmail()