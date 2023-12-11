<template>
  <div id="app">
    <Navbar />

    <div class="main-container">
      <div class="offer-container">
        <h2>Add new consulting offer</h2>
        <form class="offer-form">
          <div class="form-floating mb-3">
            <input
              description="description"
              type="text"
              class="form-control"
              id="description"
              placeholder="Your description"
              required
            />
            <label for="description">Description:</label>
          </div>
          <div class="form-floating mb-3">
            <input
              name="Experience"
              type="text"
              class="form-control"
              id="Experience"
              placeholder="Your experience"
              required
            />
            <label for="Experience">Experience:</label>
          </div>

          <div
            v-for="(qualification, index) in qualifications"
            :key="index"
            class="qualification-row"
          >
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                :id="'qualification' + index"
                :placeholder="'Qualifications ' + (index + 1)"
                v-model="qualification.text"
                required
              />
              <label :for="'qualification' + index">Qualifications:</label>
            </div>
            <button type="button" @click="removeQualification(index)">
              Remove
            </button>
          </div>

          <div class="form-floating mb-3">
            <button type="button" @click="addQualification">
              Add Qualifications
            </button>
          </div>

          <div class="form-floating mb-3">
            <select
              name="consultantType"
              class="form-control"
              id="consultantType"
              required
            >
              <option value="" disabled selected>Select Consultant Type</option>
              <option value="Financial Consulting">Financial Consulting</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Strategy Consulting">Strategy Consulting</option>
              <option value="Information Technology Consulting">
                Information Technology Consulting
              </option>
              <option value="Operations Consulting">
                Operations Consulting
              </option>
            </select>
            <label for="consultantType">Consultant Type:</label>
          </div>
          <div class="form-floating mb-3">
            <input
              name="price"
              type="number"
              class="form-control"
              id="price"
              placeholder="Enter your Price per hour"
              required
              min="100"
              max="3000"
            />
            <label for="price">Price:</label>
          </div>
          <div class="form-floating mb-3">
            <br />
            <input
              type="submit"
              value="Add"
              class="add-offer"
              @click.prevent="submitForm"
            />
          </div>
        </form>
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
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
