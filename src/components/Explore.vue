<template>
  <div id="app">
    <Navbar />
    <main class="consultants-page">
      <h1>Consultants</h1>

      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search consultants..."
        class="search-bar"
      />

      <div class="consultants-grid">
        <div
          class="consultant-card"
          v-for="consultant in filteredConsultants"
          :key="consultant.id"
        >
          <img :src="consultant.photo" alt="Consultant photo" />
          <h2>{{ consultant.name }}</h2>
          <p>{{ consultant.type }}</p>
          <p>{{ consultant.price }}</p>
          <button class="book-button" @click="bookConsultant(consultant)">
            Book
          </button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { Consultant } from "../classes.js";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  data() {
    return {
      searchTerm: "",
      consultants: [],
    };
  },
  created() {
    console.log("created");
    const db = getDatabase();
    const consultantsRef = ref(db, "consultants");
    onValue(consultantsRef, (snapshot) => {
      console.log(snapshot.val());
      const data = snapshot.val();
      for (let id in data) {
        this.consultants.push(
          new Consultant(
            data[id].name,
            data[id].expertise,
            data[id].price,
            data[id].photo,
            data[id].qualifications,
            data[id].consultancyTypes
          )
        );
      }
    });
  },
  computed: {
    filteredConsultants() {
      return this.consultants.filter((consultant) =>
        consultant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    bookConsultant(consultant) {
      localStorage.setItem("chosenConsultant", JSON.stringify(consultant));
      this.$router.push("/consultantInfo");
    },
  },
};
</script>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
.consultants-page {
  padding: 20px;
}

.search-bar {
  margin: 20px 0;
  padding: 10px;
  width: 100%;
  font-size: 1.2em;
}

.consultants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.consultant-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.consultant-card img {
  width: 100%;
  height: auto;
}
</style>
