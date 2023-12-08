<template>
  <div id="app">
    <Navbar />
    <main>
      <div class="container">
        <transition name="fade" appear>
          <div class="row">
            <div class="col text-section">
              <h1 class="head">Welcome to Mustashark!</h1>
              <p class="des">
                Connect with top finance experts for personalized advice. Utilize our tools for budgeting, tracking, and
                more to achieve financial success.
              </p>
            </div>
            <div class="col image-section">
              <img :src="imageUrl" alt="Illustration">
            </div>
          </div>
        </transition>
        <transition name="slide-up" appear>
          <div class="button-section">
            <button @click="goToConsultants">Explore Consultants</button>
          </div>
        </transition>


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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.slide-up-enter-active {
  transition: transform .5s ease-out;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.button-section {
  text-align: center;
}

button {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color .3s ease-in-out, transform .3s ease-in-out;
}

button:hover {
  background-color: darkslateblue;
  transform: translateY(-3px);
}

img {
  max-width: 100%;
  height: auto;
}

.des {
  font-size: x-large;
  margin: 10px;
}

.head {
  margin: 10px;
}</style>