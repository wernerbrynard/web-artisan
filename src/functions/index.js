const functions = require('firebase-functions');
const next = require('next');
const admin = require('firebase-admin');

admin.initializeApp();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

exports.nextjs = functions.https.onRequest((req, res) => {
  return handle(req, res);
});