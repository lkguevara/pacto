const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = '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'

sgMail.setApiKey(SENDGRID_API_KEY);


function sendWelcomeEmail(email) {
  const msg = {
    to: email,
    from: 'edwardraga.1998@gmail.com',
    templateId: 'd-61957ae9ff9d42999572262281303bcf',
    dynamic_template_data: {
      name: "Nombre del usuario registrado",
      product_name: 'Nombre del producto que se está promocionando',
      product_description: 'Descripción del producto que se está promocionando',
      // más datos dinámicos aquí...
    },
  };
  sgMail.send(msg);
}

sendWelcomeEmail('martafagundez.dev@gmail.com,liann.guevara@gmail.com,sumerlost@gmail.com,edwardraga@icloud.com,nestorriascos74@gmail.com,alexbv2615@gmail.com,mauriciogiaco@gmail.com')