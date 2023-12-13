<template>
  <div id="app">
    <Navbar />
    <main class="consultants-page">
      <p class="head">Explore Our Consultants</p>

      <div class="search-bar-container">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search consultants..."
          class="search-bar"
        />

        <select v-model="searchType" class="search-bar">
          <option disabled value="">Select a type...</option>
          <option value="">Any type</option>
          <option v-for="type in consultancyTypes" :key="type">
            {{ type }}
          </option>
        </select>
      </div>

      <div class="consultants-grid">
        <div
          class="consultant-card"
          v-for="consultant in filteredConsultants"
          :key="consultant.id"
        >
          <img :src="consultant.photo" alt="card-img-top" />
          <p class="name">{{ consultant.name }}</p>
          <div class="tags">
            <div
              v-for="type in consultant.consultancyTypes"
              :key="type"
              class="tag"
            >
              {{ type }}
            </div>
          </div>

          <div class="price">
            {{ consultant.price }} $
            <p style="display: inline; font-size: small">per Hour</p>
          </div>

          <button
            class="btn btn-success"
            style="
              background-color: rgb(1, 89, 88);
              border-color: aliceblue;
              width: 100px;
            "
            @click="bookConsultant(consultant)"
          >
            Book
          </button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchTerm: "",
      searchType: "",
      consultants: [],
    };
  },
  computed: {
    consultancyTypes() {
      const types = new Set();
      for (const consultant of this.consultants) {
        for (const type of consultant.consultancyTypes) {
          types.add(type);
        }
      }
      return Array.from(types);
    },
    filteredConsultants() {
      return this.consultants.filter(
        (consultant) =>
          consultant.name
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) &&
          (this.searchType === "" ||
            consultant.consultancyTypes.some((type) =>
              type.toLowerCase().includes(this.searchType.toLowerCase())
            ))
      );
    },
  },
  created() {
    console.log("created");
    //get consultants array from firebase api = https://getconsultants-hqm6vxtfbq-uc.a.run.app
    //call api with axios
    axios
      .get("https://getconsultants-hqm6vxtfbq-uc.a.run.app")
      .then((response) => {
        this.consultants = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
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

.search-bar-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-bar {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  font-size: 1.2em;
  border-radius: 8px;
}

.consultants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
}

.consultant-card {
  width: 240px;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background-color: rgb(232, 250, 245);
  border: 5px solid #026773;

}

.consultant-card img {
  width: 180px;
  border-radius: 10px;
  height: auto;
}
.name {
  font-size: large;
  font-weight: bold;
  color: rgb(2, 53, 53);
  margin-top: 10px;
  margin-bottom: 0px;
}

.tag {
  display: inline-block;
  background-color: rgb(0, 143, 140);
  padding: 1px 8px;
  color: white;
  border-radius: 5px;
  font-size: 0.8em;
}

.price {
  margin-top: 8px;
  margin-bottom: 8px;
  color: rgb(2, 53, 53);
  font-size: 1.1em;
  font-weight: bold;
}
.head {
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
}
</style>
