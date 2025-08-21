import sgMail from '@sendgrid/mail';
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
async function sendNewsletter() {
  const apiKey = process.env.SENDGRID_API_KEY
  sgMail.setApiKey(apiKey as string);
  const msg = {
    to: 'irishe952@gmail.com',
    from: process.env.SENDGRID_SENDER || 'newsletter@kaiyi.io',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error: unknown) {
    console.error('Error sending email:', error);
  }
}

sendNewsletter();
