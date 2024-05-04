/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const functions = require('firebase-functions');
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// const app = functions().https.onRequest(cors({ origin: 'https://taransferrr.web.app' }));

admin.initializeApp();

exports.sendEmailOnButtonClick = functions.region("asia-southeast1").https.onRequest(async (req, res) => {
  try {
    // Get data from the request (e.g., email address)
    const email = req.query.email;
    const triggerUniqueId = req.query.triggerUniqueId;

    res.set("Access-Control-Allow-Origin", "https://taransferrr.web.app");
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Specify allowed methods
    res.set("Access-Control-Allow-Headers", "Content-Type"); // Specify allowed headers

    await admin.firestore().collection("mail").add({
      to: email,
      message: {
        subject: "A user has sent you a file!",
        text: `The file sent has unique ID: ${triggerUniqueId}`,
      },
    });

    res.send("Email triggered successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error triggering email");
  }
});

