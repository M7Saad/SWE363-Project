export class Consultant {
  constructor(
    name,
    experience,
    price,
    photo,
    qualifications,
    consultancyTypes,
    description
  ) {
    this.name = name;
    this.experience = experience;
    this.price = price;
    this.photo = photo;
    this.qualifications = qualifications;
    this.consultancyTypes = consultancyTypes;
    this.description = description;
  }
}

export class ContactMsg {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
}

import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export async function pushConsultant(consultant, pending) {
  const db = getDatabase();
  const auth = getAuth();
  let refPath;
  console.log("consultant", consultant);
  if (pending) {
    refPath = `Users/${auth.currentUser.uid}/pending/${consultant.name}`;
  } else {
    refPath = `consultants/${consultant.name}`;
  }
  const dbRef = ref(db, refPath);
  // Set the data for the new document
  await set(dbRef, {
    name: consultant.name,
    experience: consultant.experience,
    price: consultant.price,
    photo: consultant.photo,
    qualifications: consultant.qualifications,
    consultancyTypes: consultant.consultancyTypes,
    description: consultant.description,
  });
  console.log("Document written with ID: ", dbRef);
}
