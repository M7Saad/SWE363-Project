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
      <h1 id="cases">Your requests</h1>
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
          <strong class="ZoomLink_title">Zoom Link:</strong><br /><a
            :href="request.ZoomLink"
            target="_blank"
            class="Zoomlink"
            >Zoom</a
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
export default {
  data() {
    return {
      imageUrl:
        "https://victoria.mediaplanet.com/app/uploads/sites/105/2019/08/MainImage_A5-2.jpg",

      requests: [
        {
          consultant_name: "Ali ahmed",
          ZoomLink: "https://www.google.com",
          state: "not accepte",
        },
        {
          consultant_name: "Ahmed Ali",
          ZoomLink: "https://www.google.com",
          state: "rejected",
        },
        {
          consultant_name: "Ahmed Ali",
          ZoomLink: "https://www.google.com",
          state: "accepted",
        },
        {
          consultant_name: "Ahmed Ali",
          ZoomLink: "https://www.google.com",
          state: "accepted",
        },
        {
          consultant_name: "Ahmed Ali",
          ZoomLink: "https://www.google.com",
          state: "accepted",
        },
        {
          consultant_name: "Ahmed Ali",
          ZoomLink: "https://www.google.com",
          state: "accepted",
        },
      ],
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
        "not-accepted": state === "not accepte",
        accepted: state === "accepted",
        rejected: state === "rejected",
      };
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
  /*font-style: italic;*/
}

#cases {
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
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
.request_box {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
/*.name {
  font-size: large;
  font-weight: bold;
  color: darkslategray;
  margin-top: 10px;
  margin-bottom: 0px;
}*/
.ZoomLink_title {
  font-size: 20px;
}
.Zoomlink {
  display: inline-block;
  margin-top: 5px;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.Zoomlink:hover {
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
  border-radius: 5px;
  font-size: 20px;
  background-color: #ddd;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.state.accepted {
  background-color: #28a745;
  color: #fff;
}
.state.rejected {
  background-color: #dc3545;
  color: #fff;
}
.state.not-accepted {
  background-color: #ffc107;
  color: #fff;
}
.text_title {
  margin-top: 20px;
}
</style>
