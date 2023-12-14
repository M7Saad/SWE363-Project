<template>
  <div id="consultation">
    <Navbar />

    <main>
      <div class="consultation-container">
        <div class="consultation-card">
          <h2 class="my-3">Consultation Details</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="issue">Your Issue</label>
              <textarea
                id="issue"
                v-model="details.issue"
                class="form-control"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="income">Income Information</label>
              <input
                id="income"
                v-model="details.income"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                v-model="details.phoneNumber"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="details.email"
                class="form-control"
                type="email"
                required
              />
            </div>
            <div class="form-check mb-3">
              <div class="form-check-input-container">
                <input
                  type="checkbox"
                  id="paymentCheck"
                  v-model="details.paymentCheck"
                  class="form-check-input"
                  required
                />
                <label for="paymentCheck" class="form-check-label"
                  >Payment Information Added</label
                >
              </div>
            </div>
            <button type="submit" class="btn btn-success">
              Confirm Consultation
            </button>
          </form>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ConsultationDetails",
  data() {
    return {
      consultant: JSON.parse(localStorage.getItem("chosenConsultant")),
      details: {
        issue: "",
        income: "",
        phoneNumber: "",
        email: "",
        paymentCheck: false,
      },
    };
  },
  methods: {
    async submitForm() {
      //get the consultant id

      if (!this.details.paymentCheck) {
        alert("Please add your payment information.");
        return;
      }

      if (
        !this.details.issue ||
        !this.details.income ||
        !this.details.phoneNumber ||
        !this.details.email
      ) {
        alert("Please fill all the fields.");
        return;
      }

      if (this.details.income < 0) {
        alert("Please enter a valid income.");
        return;
      }
      if (this.details.phoneNumber.length != 10) {
        alert("Please enter a valid phone number. Format: 05XXXXXXXX");
        return;
      }
      this.details.phoneNumber = this.details.phoneNumber.trim();
      const token = localStorage.getItem("token");
      // send data to server
      const response = await axios.post(
        "https://sendconsultantrequest-hqm6vxtfbq-uc.a.run.app",
        {
          consultantUID: this.consultant.uid,
          details: this.details,
        },
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );

      // Reset form
      this.details = {
        issue: "",
        income: "",
        phoneNumber: "",
        email: "",
        paymentCheck: false,
      };
      this.$router.push("/userRequest");

      alert("Your consultation details have been submitted successfully!");
    },
  },
};
</script>
<script setup>
import { useRouter } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const router = useRouter();
</script>

<style scoped>
main {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.form-group {
  margin-bottom: 20px;
}

.form-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  background-color: rgb(1, 89, 88);
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}

.consultation-card {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 20px;
}

.consultation-container {
  max-width: 800px; /* Adjust the maximum width as needed */
  width: 100%;
}
</style>
