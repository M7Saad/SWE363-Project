<template>
  <div id="app">
    <Navbar />

    <div class="main-container">
      <div class="offer-container">
        <h2>Add new consulting offer</h2>
        <form class="offer-form">
          <div class="form-floating mb-3">
            <input
              v-model="description"
              type="text"
              class="form-control"
              id="description"
              placeholder="Your description"
              required
            />
            <label for="description">Description:</label>
            <div v-if="alertMessages.description" class="alert">
              {{ alertMessages.description }}
            </div>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="experience"
              type="text"
              class="form-control"
              id="Experience"
              placeholder="Your experience"
              required
            />
            <label for="Experience">Experience:</label>
            <div v-if="alertMessages.experience" class="alert">
              {{ alertMessages.experience }}
            </div>
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
              v-model="consultancyTypes"
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
              <option value="Information Technology Consulting">
                Invesment Consulting
              </option>
              <option value="Information Technology Consulting">
                Islamic Invesments Consulting
              </option>
              <option value="Operations Consulting">
                Operations Consulting
              </option>
            </select>
            <label for="consultantType">Consultant Type:</label>
            <div v-if="alertMessages.consultancyTypes" class="alert">
              {{ alertMessages.consultancyTypes }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="price"
              type="number"
              class="form-control"
              id="price"
              placeholder="Enter your Price per hour"
              required
              min="100"
              max="3000"
            />
            <label for="price">Price:</label>
            <div v-if="alertMessages.price" class="alert">
              {{ alertMessages.price }}
            </div>
          </div>
          <div class="form-floating mb-3 submit-button-container">
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
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      description: "",
      qualifications: [{ text: "" }],
      consultancyTypes: "",
      experience: "",
      price: "",
      alertMessages: {
        description: "",
        experience: "",
        consultancyTypes: "",
        price: "",
      },
    };
  },
  watch: {
    description(newVal) {
      if (newVal && this.alertMessages.description) {
        this.alertMessages.description = "";
      }
    },
    experience(newVal) {
      if (newVal && this.alertMessages.experience) {
        this.alertMessages.experience = "";
      }
    },
    consultancyTypes(newVal) {
      if (newVal && this.alertMessages.consultancyTypes) {
        this.alertMessages.consultancyTypes = "";
      }
    },
    price(newVal) {
      if (
        !isNaN(parseFloat(newVal)) &&
        parseFloat(newVal) > 0 &&
        this.alertMessages.price
      ) {
        this.alertMessages.price = "";
      }
    },
  },
  methods: {
    addQualification() {
      this.qualifications.push({ text: "" });
    },
    removeQualification(index) {
      this.qualifications.splice(index, 1);
    },
    submitForm() {
      // Reset the alert messages
      this.alertMessages = {
        description: "",
        experience: "",
        consultancyTypes: "",
        price: "",
      };

      // Validate the form
      if (!this.description) {
        this.alertMessages.description = "Please provide a description.";
      }
      if (!this.experience) {
        this.alertMessages.experience = "Please provide your experience.";
      }
      if (!this.consultancyTypes) {
        this.alertMessages.consultancyTypes =
          "Please select a consultancy type.";
      }
      if (isNaN(parseFloat(this.price)) || parseFloat(this.price) < 0) {
        this.alertMessages.price =
          "Please provide a valid price greater than 0.";
      }

      // Check if any errors exist
      if (
        !this.description ||
        !this.experience ||
        !this.consultancyTypes ||
        isNaN(parseFloat(this.price)) ||
        parseFloat(this.price) < 0
      ) {
        return; // Stop submission if there are errors
      }
      //leave this as it is (don't change it)
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          let token = await user.getIdToken(true);
          //wait for the token
          //change qualifications to array of strings
          let quali = [];
          for (let i = 0; i < this.qualifications.length; i++) {
            quali.push(this.qualifications[i].text);
          }
          console.log(quali);

          axios
            .post(
              "https://bepartner-hqm6vxtfbq-uc.a.run.app",
              {
                description: this.description,
                experience: this.experience,
                qualifications: quali,
                consultancyTypes: this.consultancyTypes,
                price: this.price,
              },

              {
                headers: {
                  Authorization: `${token}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
              //go to the home
              this.$router.push("/");
            });
        } else {
          console.log("No user is signed in");
          //go to login page
          $router.push("/login");
        }
      });
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
  min-height: 90vh;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin: 40px;
}

.offer-container {
  max-height: 100%;
  width: 500px;
  padding: 20px;
  margin-bottom: 300px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  border: 5px solid #026773;
}
h2 {
  text-align: center;
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}
button {
  background-color: #026773;
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
  background-color: #026773;
  color: white;
  border: none;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-offer:hover {
  background-color: #3ca6a6;
}

.alert {
  color: red;
  margin-top: 5px;
}
.submit-button-container {
  text-align: center;
  margin-bottom: 20px;
}

/*@media (min-width: 600px) {
  .offer-container {
    width: 400px;
    padding: 20px;
  }

  .main-container {
    padding-bottom: 50px;
  }
}*/
</style>
