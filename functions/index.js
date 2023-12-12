//cloud functions
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");

//initialize app
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://swe363-321-project-default-rtdb.firebaseio.com",
});


exports.sayHello = onRequest(
{cors: true},
  (req, res) => {
    //access the database realtime

    res.status(200).send("Hello world!");
  }
);


exports.getConsultants = onRequest(
    {cors: true},
      (req, res) => {
        //access the database realtime
        const db = admin.database();
        //get the content of the database, names only
        const ref = db.ref('consultants');
        //send it back
        const ans = [];
        ref.on("value", (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            ans.push(childData);
          });
        });
        res.status(200).send(ans);
      }
    );