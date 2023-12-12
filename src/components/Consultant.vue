<template>
  <div id="app">
    <Navbar />

    <div class="main-container">
      <h1 id="cases">Consultation Cases</h1>
      <div class="cases-box">
        <div
          class="cases-card"
          v-for="(request, index) in requests"
          :key="index"
        >
          <strong>Name:</strong><br />
          <p class="name">{{ request.user_name }}</p>
          <hr />
          <strong>Phone:</strong><br />
          <a :href="request.Phone_number">Call</a>
          <div class="status-dropdown">
            <label for="status">Status:</label>
            <select
              v-model="request.status"
              @change="updateStatus(request, index)"
            >
              <option value="in_progress">In Progress</option>
              <option value="rejected">Reject</option>
              <option value="finished">Finished</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      qualifications: [{ text: "" }],

      requests: [
        {
          user_name: "Ali Ahmed",
          Phone_number: "34455666",
        },
        {
          user_name: "Ahmed Ali",
          Phone_number: "34455666",
        },
        {
          user_name: "Ahmed Ali",
          Phone_number: "34455666",
        },
      ],
    };
  },
  methods: {
    addQualification() {
      this.qualifications.push({ text: "" });
    },
    removeQualification(index) {
      this.qualifications.splice(index, 1);
    },
    submitForm() {
      console.log("Form submitted:", this.qualifications);
    },
    updateStatus(request, index) {
      console.log(`Updating status for ${request.user_name} at index ${index}`);
    },
  },
};
</script>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}

.qualification-row {
  display: flex;
  align-items: center;
}

.qualification-row button {
  margin-left: 10px;
}

.offer-container {
  width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.cases-box {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.cases-card {
  width: 200px;
  border: 5px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.add-offer {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-offer:hover {
  background-color: rgb(137, 71, 184);
}
</style>
