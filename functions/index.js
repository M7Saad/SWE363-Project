//cloud functions
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");

//initialize app
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://swe363-321-project-default-rtdb.firebaseio.com",
});

//minimal example
exports.sayHello = onRequest({ cors: true }, (req, res) => {
  res.status(200).send("Hello world!");
});

exports.getConsultants = onRequest({ cors: true }, (req, res) => {
  //access the database realtime
  const db = admin.database();
  //get the content of the database, names only
  const ref = db.ref("consultants");
  //send it back
  const ans = [];
  ref.on("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      ans.push(childData);
    });
  });
  res.status(200).send(ans);
});

//imports
const xss = require("xss");
const validator = require("validator");
exports.bePartner = onRequest(async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  //get the token from the header, the request body
  const token = req.headers.authorization;
  const consultant = req.body;

  try {
    admin
      .auth()
      .verifyIdToken(token)
      .then(async (decodedToken) => {
        const UID = decodedToken.uid;
        const NAME = decodedToken.name;
        const PHOTO = decodedToken.picture;

        console.log("uid: ", UID, "name: ", NAME, PHOTO);

        //if there is no photo, request the user to put one
        if (!PHOTO) {
          res.status(400).send("Photo is required to be a consultant");
          return;
        }

        const sanitizedConsultant = {
          name: xss(validator.trim(NAME)),
          experience: xss(consultant.experience),
          price: xss(validator.isNumeric(String(consultant.price))),
          photo: xss(validator.trim(PHOTO)),
          qualifications: xss(consultant.qualifications),
          consultancyTypes: xss(validator.trim(consultant.consultancyTypes)),
          description: xss(validator.trim(consultant.description)),
        };
        const db = admin.database();
        const ref = db.ref(`users/${UID}` + "/pending");
        await ref.set(sanitizedConsultant);
        res.status(200).send("Consultant data saved successfully");
      })
      .catch((error) => {
        console.error(error);
        res.status(401).send("Unauthorized");
      });
  } catch (error) {
    console.error("Error saving consultant data: ", error);
    res.status(500).send("Error saving consultant data");
  }
});