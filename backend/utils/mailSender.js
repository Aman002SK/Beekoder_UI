const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        console.log("mera email", process.env.MAIL_USER)
        const transporter = nodemailer.createTransport({
            host:  process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
       
        const info = await transporter.sendMail({
            from: 'Beekoder || by Aman Rai',
            to: email,
            subject: title,
            html: body // Assuming body is HTML
        });

        // console.log('Info of sent mail - ', info);
        return info;
    } catch (error) {
        console.log('Error while sending mail - ', error);
        throw error; // Throw the error to handle it in the calling function
    }
};

module.exports = mailSender;