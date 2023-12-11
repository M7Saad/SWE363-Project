export class Consultant {
  constructor(
    name,
    expertise,
    price,
    photo,
    qualifications,
    consultancyTypes,
    description
  ) {
    this.name = name;
    this.expertise = expertise;
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
