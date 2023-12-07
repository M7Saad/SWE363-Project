<template>
  <div id="app">
    <header>
      <h1>Mustashark</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

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

    <footer>
      <p>© 2024 Mustashark. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Consultant from "../classes.js";
export default {
  data() {
    return {
      searchTerm: "",
      consultants: [
        new Consultant(
          "Ali Afif",
          "Financial Advisor, Career Counselor",
          120,
          "https://pbs.twimg.com/profile_images/1128330688976044032/-icjAsNR_400x400.jpg",
          ["Certified Financial Planner", "MBA in Finance"],
          ["Financial Advisor", "Career Counselor"]
        ),
        new Consultant(
          "khaled Afif",
          "Financial Advisor, Career Counselor",
          120,
          "https://pbs.twimg.com/profile_images/1128330688976044032/-icjAsNR_400x400.jpg",
          ["Certified Financial Planner", "MBA in Finance"],
          ["Financial Advisor", "Career Counselor"]
        ),
      ],
    };
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

<style scoped>
header {
  background-color: indigo;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}

nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

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

footer {
  background-color: indigo;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
