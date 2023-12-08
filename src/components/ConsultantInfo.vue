<template>
  <div id="consultant">
    <Navbar />

    <main>
      <div class="consultant-info-container">
        <div class="consultant-card card border-dark mb-3 d-flex flex-row">
          <div class="column card border-dark mb-3 d-flex flex-cloumn">
            <div class="p-3">
              <img
                v-if="consultant.photo"
                :src="consultant.photo"
                alt="Consultant Image"
                class="card-img-top"
              />
              <div class="card-header" style="margin-bottom: 10px">
                {{ consultant.name }}
              </div>
              <div class="card-header" style="margin-bottom: 10px">
                <span class="card-subtitle mb-2 text-muted">Description:</span>
                <p class="des">{{ consultant.bio }}</p>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="consultancy-types" style="margin-bottom: 10px">
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
            <div class="experiences" style="margin-bottom: 10px">
              <h6 class="card-subtitle mb-2 text-muted">Experience:</h6>
              <ul class="list-group">
                <!-- <li
                  v-for="experience in consultant.expertise"
                  :key="experience"
                  class="list-group-item"
                > -->
                {{
                  consultant.expertise
                }}
                <!-- </li> -->
              </ul>
            </div>
            <div class="qualifications" style="margin-bottom: 10px">
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
            <div class="price" style="margin-bottom: 10px">
              <h6 class="card-subtitle mb-2 text-muted">Price:</h6>
              <ul class="list-group">
                <li class="list-group-item">
                  <p>{{ consultant.price }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <button @click="bookConsultation" class="btn btn-success">
            Book Consultation
          </button>
        </div>
      </div>
    </main>

    <Footer />
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
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
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

.des {
  font-size: 14px;
  color: chocolate;
}
</style>
