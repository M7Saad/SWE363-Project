<template>
  <div id="app">
    <Navbar />
    <main>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6">
            <h1>Welcome to Mustashark!</h1>
            <p>
              Mustashark is your comprehensive financial consultancy web
              application. We connect you with seasoned finance consultants to
              provide expert advice personalized to your unique financial
              situation.
            </p>
            <button class="btn btn-primary" @click="goToConsultants">
              Explore Consultants
            </button>
          </div>
          <div class="col-lg-6">
            <img :src="imageUrl" alt="Illustration" class="img-fluid" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Personal Consultancy</h5>
                <p class="card-text">
                  Get personalized financial advice from our expert consultants.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Budgeting Tools</h5>
                <p class="card-text">
                  Use our powerful tools to track your expenses and manage your
                  budget.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">AI Consultant</h5>
                <p class="card-text">
                  Learn more about the future finance consultancy with our AI
                </p>
              </div>
            </div>
          </div>
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
</style>
