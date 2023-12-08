<template>
  <div id="app">
    <Navbar />
    <main>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="title">
              <h1>Mustashark request page</h1>
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
      <div id="request_box">
        <div
          class="request-card"
          v-for="(request, index) in requests"
          :key="index"
        >
          <strong>Consultant Name:</strong> {{ request.consultant_name }}
          <br />
          <strong>Team Link:</strong> {{ request.teamLink }}
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
          consultant_name: "hey",
          teamLink: "https://www.google.com",
        },
        {
          consultant_name: "allahy3een",
          teamLink: "https://www.google.com",
        },
        {
          consultant_name: "allahy3een",
          teamLink: "https://www.google.com",
        },
      ],
    };
  },
  methods: {
    goToConsultants() {
      this.$router.push("/Explore");
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
  background-color: indigo;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
}
p {
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
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
  flex: 1 0 200px;
  max-width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  text-align: center;
}
</style>
