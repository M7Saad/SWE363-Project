<template>
  <div id="app">
    <Navbar />

    <div class="main-container">
      <h1 id="cases" style="font-family: 'Secular One', sans-serif">
        Consultation Cases
      </h1>
      <div class="cases-box">
        <div
          class="cases-card"
          v-for="(request, index) in requests"
          :key="index"
        >
          <strong>Name:</strong><br />
          <p class="name">{{ request.clientName }}</p>
          <hr />
          <strong>issue:</strong><br />
          <p class="issue">{{ request.issue }}</p>
          <strong>income:</strong><br />
          <p class="income">{{ request.income }}</p>
          <strong>Phone:</strong><br />
          <a :href="request.phoneNumber">{{ request.phoneNumber }}</a>
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
import axios from "axios";
export default {
  data() {
    return {
      qualifications: [{ text: "" }],
      requests: [],
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
      console.log(
        `Updating status for ${request.clientName} at index ${index}`
      );
    },
  },
  created() {
    console.log("created");
    //get consultants array from firebase api
    //call api with axios
    axios
      .post("https://getrequests-hqm6vxtfbq-uc.a.run.app", {
        //token
        token: localStorage.getItem("token"),
      })
      .then((response) => {
        //split the response data into an array
        //for each request in the response
        response.data.forEach((request) => {
          //push the request to the requests array
          if (typeof request != "object") {
            return;
          }

          console.log(request);
          this.requests.push({
            clientName: request.clientName,
            ZoomLink: request.ZoomLink,
            issue: request.issue,
            state: "Accepted",
            income: request.income,
            phoneNumber: request.phoneNumber,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
  border: 5px solid #026773;
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
