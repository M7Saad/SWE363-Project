<template>
  <div id="app">
    <Navbar />
    <main>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 info">
            <h1 style="font-family: 'Secular One', sans-serif">
              Welcome to Mustashark!
            </h1>
            <p>
              Mustashark is your comprehensive financial consultancy web
              application. We connect you with seasoned finance consultants to
              provide expert advice personalized to your unique financial
              situation.
            </p>
            <button
              class="btn btn-primary"
              style="
                background-color: rgb(0, 143, 140);
                border-color: aliceblue;
              "
              @click="goToConsultants"
            >
              Explore Consultants
            </button>
          </div>
        </div>

        <div id="exploreContent">
          <h2 class="head">Our Services</h2>
          <div class="row mt-5">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Personal Consultancy</h5>
                  <p class="card-text">
                    Get personalized financial advice from our expert
                    consultants.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Budgeting Tools</h5>
                  <p class="card-text">
                    Use our powerful tools to track your expenses and manage
                    your budget.
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
                  <div class="partner">
                    <a href="https://www.kfupm.edu.sa" target="_blank">
                      <img
                        src="/src/assets/kfupm.png"
                        alt="KFUPM"
                        class="img-fluid"
                        width="130"
                        height="130"
                      />
                    </a>
                  </div>
                  <div class="partner">
                    <a href="" target="_blank">
                      <img
                        src=""
                        alt=""
                        class="img-fluid"
                        width="130"
                        height="130"
                      />
                    </a>
                  </div>
                  <div class="partner">
                    <a
                      href="https://developers.google.com/calendar/api/guides/overview"
                      target="_blank"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                        alt="ChatGPT"
                        class="img-fluid"
                        width="130"
                        height="130"
                      />
                    </a>
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
                <button
                  class="btn btn-primary"
                  @click="bepartner"
                  style="
                    background-color: rgb(0, 143, 140);
                    border-color: aliceblue;
                  "
                >
                  Get Involved
                </button>
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
      partners: [
        {
          name: "Partner1",
          logoUrl: "/src/assets/kfupm.png",
        },
        {
          name: "Partner3",
          logoUrl: "https://developers.google.com/calendar/api/guides/overview",
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
    scrollToContent() {
      const exploreContent = document.getElementById("exploreContent");
      if (exploreContent) {
        exploreContent.scrollIntoView({ behavior: "smooth" });
      }
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
.card-body {
  border: 3px solid #026773;
  border-radius: 5px;
}

.scroll-down-button {
  text-align: center;
  margin-top: -7rem;
  margin-bottom: 8rem;
}

.scroll-down-button a {
  display: inline-block;
  background-color: rgba(0, 143, 140, 0.7);
  border-radius: 50%;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  width: 50px;
  height: 50px;
}

.scroll-down-button a:hover {
  background-color: rgba(0, 143, 140, 1);
  transform: scale(1.1);
}

.btn btn-primary :hover {
  background-color: rgba(93, 174, 173, 0.7);
}

.arrow {
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

#exploreContent {
  margin-top: -5rem;
}
@media (max-width: 992px) {
  .info,
  .img-fluid {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

  .row {
    flex-direction: column;
    align-items: center;
  }

  .partners-row {
    justify-content: center;
  }
}

/* Adjustments for even smaller screens */
@media (max-width: 768px) {
  .info,
  .card-body {
    padding: 15px;
  }

  .info {
    margin-bottom: 50px;
  }

  .scroll-down-button {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
}

/* Mobile-specific adjustments */
@media (max-width: 576px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
