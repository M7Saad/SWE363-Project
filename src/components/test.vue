<template>
  <div id="app">
    <Navbar />

    <main>
      <!--take input, one field-->
      <input type="text" v-model="inputField" placeholder="Enter something" />
      <!--take input, one field-->
      <button @click="pushToFirebase(test)">Push to Firebase</button>
    </main>

    <Footer />
  </div>
</template>

<script>
import { getDatabase, ref as dbRef, set } from "firebase/database";
import { Consultant } from "../classes.js";

export default {
  data() {
    return {
      imageUrl:
        "https://victoria.mediaplanet.com/app/uploads/sites/105/2019/08/MainImage_A5-2.jpg",
      inputField: "",
      test: new Consultant(
        "Ali Afif",
        "Financial Advisor, Career Counselor",
        120,
        "https://pbs.twimg.com/profile_images/1128330688976044032/-icjAsNR_400x400.jpg",
        ["Certified Financial Planner", "MBA in Finance"],
        ["Financial Advisor", "Career Counselor"],
        "biooooooooooooooooo"
      ),
    };
  },
  methods: {
    async pushToFirebase(test) {
      for (const key in test) {
        console.log(key);
        if (test[key] === undefined || test[key] === null) {
          console.error(`The property '${key}' is ${test[key]}`);
          return;
        }
      }
      const db = getDatabase();
      const consultantRef = dbRef(db, "consultants/" + test.name);
      await set(consultantRef, {
        name: test.name,
        experience: test.experience,
        price: test.price,
        photo: test.photo,
        qualifications: test.qualifications,
        consultancyTypes: test.consultancyTypes,
        description: test.description,
      });
      console.log("Consultant stored in Firebase!");
    },
  },
};
//ثباحو
</script>
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>
