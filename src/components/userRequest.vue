<template>
  <div id="app">
    <Navbar />
    <main>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="title">
              <h1 style="font-family: 'Secular One', sans-serif">
                Mustashark request page
              </h1>
            </div>
            <p>
              Mustashark is your all-encompassing financial consultancy web
              application. Our dedicated consultants will respond soon to
              provide expert advice tailored to your unique financial situation.
            </p>
          </div>
          <div class="col-lg-6">
            <img :src="imageUrl" alt="Illustration" class="img-fluid" />
          </div>
        </div>
      </div>
      <h1 id="cases" style="font-family: 'Secular One', sans-serif">
        Your requests
      </h1>
      <div class="request_box">
        <div
          class="request-card"
          v-for="(request, index) in requests"
          :key="index"
        >
          <strong>Consultant Name:</strong><br />
          <p class="name">
            {{ request.consultant_name }}
          </p>
          <hr />
          <strong class="googleLink_title">google Link:</strong><br /><a
            :href="request.googleLink"
            target="_blank"
            class="googlelink"
            >google meeting</a
          ><br />
          <strong class="state_title">State:</strong><br />
          <p :class="getStateClass(request.state)">{{ request.state }}</p>
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
      imageUrl:
        "https://victoria.mediaplanet.com/app/uploads/sites/105/2019/08/MainImage_A5-2.jpg",

      requests: [],
    };
  },
  methods: {
    goToConsultants() {
      this.$router.push("/Explore");
    },
  },
  methods: {
    getStateClass(state) {
      return {
        state: true,
        "not-accepted": state === "pending",
        accepted: state === "Accepted",
        finished: state === "finished",
      };
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
            consultant_name: request.consultantName,
            googleLink: request.googleLink,
            state: "Accepted",
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
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow: auto;
}

main {
  padding: 20px;
  min-height: 100vh;
  overflow: auto;
}

.request_box {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.col {
  flex: 1;
}

.text-section {
  transition: opacity 1s ease-in-out;
}

.image-section {
  transition: transform 1s ease-in-out;
}
.text-section {
  transition: opacity 1s ease-in-out;
}

.image-section {
  transition: transform 1s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.title {
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
}

p {
  font-size: 19px;
}

#cases {
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  margin-top: -2rem;
}
#request_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.request-card {
  width: 200px;
  border: 5px solid #026773;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
/*.name {
  font-size: large;
  font-weight: bold;
  color: darkslategray;
  margin-top: 10px;
  margin-bottom: 0px;
}*/
.googleLink_title {
  font-size: 20px;
}

.googlelink {
  display: inline-block;
  margin-top: 5px;
  padding: 10px 15px;
  background-color: #175698;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.googlelink:hover {
  background-color: #051d37;
}
.state_title {
  font-size: 20px;
  margin-top: 5px;
}
.state {
  display: inline-block;
  margin-top: 5px;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #ddd;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.state.accepted {
  background-color: #236133;
  color: #fff;
}
.state.finished {
  background-color: #191651;
  color: #fff;
}
.state.not-accepted {
  background-color: #b99422;
  color: #fff;
}
.text_title {
  margin-top: 20px;
}
</style>
