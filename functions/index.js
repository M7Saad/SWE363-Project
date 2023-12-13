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

//be a partner
const xss = require("xss");
const validator = require("validator");
exports.bePartner = onRequest({ cors: true }, (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  //get the token from the header, the request body
  const token = req.headers.authorization;
  const consultant = req.body;
  console.log("consultant: ", consultant);
  try {
    admin
      .auth()
      .verifyIdToken(token)
      .then(async (decodedToken) => {
        const UID = decodedToken.uid;
        let NAME = decodedToken.name;
        let PHOTO = decodedToken.picture;

        console.log("uid: ", UID, "name: ", NAME, PHOTO);

        //if there is no photo, request the user to put one
        if (!PHOTO) {
          PHOTO =
            "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
        }

        if (!NAME) {
          NAME = UID;
        }
        //validate
        // Validate the data
        if (
          !validator.isNumeric(String(consultant.price)) &&
          consultant.price > 0
        ) {
          return res.status(400).send("Price must be a number, greater than 0");
        }

        if (!validator.isLength(consultant.experience, { min: 1 })) {
          return res.status(400).send("Experience is required");
        }

        if (consultant.qualifications.length == 0) {
          return res.status(400).send("Qualifications are required");
        }

        if (!validator.isLength(consultant.consultancyTypes, { min: 1 })) {
          return res.status(400).send("Consultancy types are required");
        }

        if (!validator.isLength(consultant.description, { min: 1 })) {
          return res.status(400).send("Description is required");
        }

        const sanitizedConsultant = {
          name: xss(validator.trim(NAME)),
          experience: xss(consultant.experience),
          price: xss(consultant.price),
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

exports.makeUserConsultant = onRequest({ cors: true }, (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }
  //get the token from the header, the request body
  const token = req.headers.authorization;
  const consultant = req.body;

  //check that the sender is an admin
  admin
    .auth()
    .verifyIdToken(token)
    .then((claims) => {
      if (claims.admin === true) {
        //change the user's role)
        //check that the user isn't an admin already
        if (admin.auth().getUser(consultant.uid).customClaims.admin) {
          res.status(400).send("User is already an admin");
          return;
        }
        admin.auth().setCustomUserClaims(consultant.uid, { consultant: true });
        console.log("User is now a consultant");
        res.status(200).send("User is now a consultant");
      } else {
        res.status(401).send("Unauthorized");
      }
    });
});
