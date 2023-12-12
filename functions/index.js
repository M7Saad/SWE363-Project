

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();
const cors = require('cors')({origin: true});


exports.sayHello = onRequest(
  { cors: true },
  (req, res) => {
    res.status(200).send("Hello world!");
  }
);