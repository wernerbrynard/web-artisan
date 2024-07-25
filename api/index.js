const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();
sgMail.setApiKey(functions.config().sendgrid.key); // Ensure SendGrid API key is set in Firebase environment

exports.sendEmailOnEnquiry = functions.firestore
  .document('contactMessages/{docId}')
  .onCreate((snap, context) => {
    const newValue = snap.data();
    const emailContent = {
      to: 'werner@webartisan.co.za',
      from: 'contact@webartisan.co.za',
      subject: 'New Enquiry Received',
      text: `New enquiry received: ${JSON.stringify(newValue)}`,
    };

    return sgMail.send(emailContent)
      .then(() => console.log('Email sent'))
      .catch((error) => console.error('Error sending email', error));
  });