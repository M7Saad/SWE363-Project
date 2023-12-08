<template>
  <div id="consultation">
    <Navbar />

    <main>
      <div class="consultation-details-container">
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

          <button type="submit" class="btn btn-success">
            Confirm Consultation
          </button>
        </form>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "ConsultationDetails",
  data() {
    return {
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
    submitForm() {
      if (!this.details.paymentCheck) {
        alert("Please add your payment information.");
        return;
      }

      // Here you would usually make a request to your backend service to
      // submit the consultation details. For the sake of this example,
      // we're just logging the details to the console.
      console.log(this.details);

      // Reset form
      this.details = {
        issue: "",
        income: "",
        phoneNumber: "",
        email: "",
        paymentCheck: false,
      };

      alert("Your consultation details have been submitted successfully!");
    },
  },
};
</script>
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
main {
  padding: 20px;
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
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
