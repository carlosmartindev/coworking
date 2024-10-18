const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'carlosmartin.dev@gmail.com',
        pass: 'isfvygbmfympiwxy',
    },
    tls: {
        rejectUnauthorized: false, // Ignora errores de certificado
    },
});

const mailOptions = {
    from: 'carlosmartin.dev@gmail.com',
    to: 'carlosmartin.dev@gmail.com', // Cambia esto por tu correo
    subject: 'Prueba de envío de correo',
    text: 'Este es un correo de prueba.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Correo enviado: ' + info.response);
});
