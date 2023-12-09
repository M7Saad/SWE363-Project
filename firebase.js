//set the type to commonjs first, before running this script, then change it back to module

var admin = require("firebase-admin");

var serviceAccount = require("lol");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://swe363-321-project-default-rtdb.firebaseio.com",
});

//claims
const uid = "yYaDKtAKoPU3bsp0ZAJVFXsFT083"; // Replace with the UID of the user you want to set claims for
const claims = { admin: true }; // The custom claims you want to set

admin
  .auth()
  .setCustomUserClaims(uid, claims)
  .then(() => {
    console.log("Custom claims set successfully");
  })
  .catch((error) => {
    console.error("Error setting custom claims:", error);
  });
