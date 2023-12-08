<template>
  <div id="app">
    <Navbar />

    <main>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Welcome to Mustashark!</h1>
            <p>
              Mustashark is your comprehensive financial consultancy web application. We connect you with seasoned finance consultants to provide expert advice personalized to your unique financial situation. Our platform offers personal and investment financial consultancy, powerful budgeting and expense-tracking tools, insightful interactive dashboards, a wealth of educational resources, comprehensive financial reports, and AI-driven responses. Start your journey to financial success with Mustashark today.
            </p>
            <button @click="goToConsultants">Explore Consultants</button>
          </div>
          <div class="col">
            <img :src="imageUrl" alt="Illustration">
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
      imageUrl: 'https://victoria.mediaplanet.com/app/uploads/sites/105/2019/08/MainImage_A5-2.jpg',  
    };
  },
  methods: {
    goToConsultants() {
      this.$router.push('/Explore'); 
    },
  },
};
</script>
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
html, body, #app {
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
}

.col {
  flex: 1;
}

button {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}
</style>