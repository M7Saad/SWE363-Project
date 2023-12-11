<template>
  <div id="app">
    <Navbar />
    <main>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 info">
            <h1>Welcome to Mustashark!</h1>
            <p>
              Mustashark is your comprehensive financial consultancy web
              application. We connect you with seasoned finance consultants to
              provide expert advice personalized to your unique financial
              situation.
            </p>
            <button class="btn btn-primary" style="background-color: rgb(0, 143, 140); border-color: aliceblue;"  @click="goToConsultants">
              Explore Consultants
            </button>
          </div>
          <!-- <div class="col-lg-6">
            <img :src="imageUrl" alt="Illustration" class="img-fluid" />
          </div> -->
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

        <div class="row mt-5">
          <div class="col-12">
            <h2 class="head">Our Partners</h2>
            <div class="partners">
              <transition-group name="fade" tag="div" class="partners-row">
                <div
                  v-for="(partner, index) in partners"
                  :key="index"
                  class="partner"
                >
                  <img
                    :src="partner.logoUrl"
                    :alt="partner.name"
                    class="img-fluid"
                    width="130"
                    height="130"
                  />
                </div>
              </transition-group>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12">
            <h2 class="head">Interested in Becoming a Partner?</h2>
            <p class="text-center">
              Collaborate with us on our journey to create positive change.
              Become an advisor and explore partnership opportunities with us.
            </p>
            <div class="text-center">
              <button class="btn btn-primary" @click="bepartner">
                Get Involved
              </button>
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
      partners: [
        {
          name: "Partner1",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/ar/archive/3/37/20180719130502%21King_Fahd_University_of_Petroleum_%26_Minerals_Logo.png",
        },
        {
          name: "Partner2",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
        },
      ],
    };
  },
  methods: {
    goToConsultants() {
      this.$router.push("/Explore");
    },
    bepartner() {
      this.$router.push("/partner");
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

.info {
  margin-left: 50px;
  margin-bottom: 100px;

  width: 500px;
}

main {
  padding: 20px;
}

img {
  width: 400px;
  padding: 0;
  margin-right: 10px;
  margin-bottom: 30px;
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
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.card-title {
  text-align: center;
}

.card-text {
  text-align: center;
  color: grey;
}

.partners {
  margin-top: 2rem;
  text-align: center;
}

.partners-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.partner {
  width: 150px;
}

.head {
  margin-top: 30px;
  text-align: center;
}
</style>
