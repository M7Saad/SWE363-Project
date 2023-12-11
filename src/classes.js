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
