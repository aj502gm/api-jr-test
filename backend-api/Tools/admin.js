var admin = require("firebase-admin");

var serviceAccount = require("../api-test-fcd1a-firebase-adminsdk-xjd6e-2ff800fce7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };