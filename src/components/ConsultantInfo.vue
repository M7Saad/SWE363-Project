<template>
  <div id="consultant">
    <header>
      <h1>Mustashark</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <main>
      <div class="consultant-info-container">
        <div class="consultant-card card border-dark mb-3 d-flex flex-row">
          <div class="p-3">
            <img
              v-if="consultant.photo"
              :src="consultant.photo"
              alt="Consultant Image"
              class="card-img-top"
            />
          </div>
          <div class="card-body">
            <div class="card-header">{{ consultant.name }}</div>
            <div class="consultancy-types">
              <h6 class="card-subtitle mb-2 text-muted">Consultancy Types:</h6>
              <ul class="list-group">
                <li
                  v-for="type in consultant.consultancyTypes"
                  :key="type"
                  class="list-group-item"
                >
                  {{ type }}
                </li>
              </ul>
            </div>
            <div class="qualifications">
              <h6 class="card-subtitle mb-2 text-muted">Qualifications:</h6>
              <ul class="list-group">
                <li
                  v-for="qualification in consultant.qualifications"
                  :key="qualification"
                  class="list-group-item"
                >
                  {{ qualification }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="price h4">${{ consultant.price }}</div>
          <button @click="bookConsultation" class="btn btn-success">
            Book Consultation
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
import { Consultant } from "../classes.js";
export default {
  name: "ConsultantInfo",
  data() {
    return {
      consultant: JSON.parse(localStorage.getItem("chosenConsultant")),
    };
  },
  methods: {
    bookConsultation() {
      this.$router.push("/ConsultantDetails");
    },
  },
};
</script>

<style scoped>
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

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

main {
  padding: 20px;
}

button {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
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

img {
  max-width: 100%;
  height: auto;
}

.consultant-card {
  border: 1px solid #dee2e6;
  border-radius: 10px;
}

.card-img-top {
  max-width: 50%;
  border-radius: 10px 10px 0 0;
}
</style>
