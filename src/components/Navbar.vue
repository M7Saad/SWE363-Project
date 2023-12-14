<template>
  <header>
    <div class="logo-container">
      <img src="./assets/logo.png" alt="Logo" class="logo" />
      <a href="/"><h1>Mustashark</h1></a>
    </div>

    <nav>
      <div class="nav-links">
        <a href="/">Home</a>

        <!-- My Requests for regular users -->
        <a v-if="isUser" href="/userRequest">My Requests</a>

        <!--Dashboard-->
        <a v-if="isAdmin" href="/admin">Dashboard</a>
        <a v-else-if="isConsultant" href="/consultant">Dashboard</a>
        <a v-else href="/explore">Dashboard</a>

        <a href="/contactUs">Contact</a>
      </div>

      <div v-if="loading">Loading...</div>
      <div
        class="user-container"
        v-else-if="user"
        @mouseover="showSlide = true"
        @mouseleave="showSlide = false"
      >
        <img
          :src="photoURL"
          alt="User Photo"
          class="user-photo"
          @click="showSlide = !showSlide"
        />
        <transition name="slide-fade">
          <div v-show="showSlide" class="slide">
            <button @click="signOut" style="font-weight: bold">Sign Out</button>
          </div>
        </transition>
      </div>

      <button v-else @click="signIn" style="font-weight: bold; margin-left: 10px;">Sign In</button>
    </nav>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  computed: {
    photoURL() {
      return this.user && this.user.photoURL
        ? this.user.photoURL
        : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
    },
  },
  name: "Navbar",
  data() {
    return {
      loading: true,
      isAdmin: false,
      isConsultant: false,
      user: null,
      showSlide: false,
      isUser: false,
    };
  },
  methods: {
    signIn() {
      //go to login page
      this.$router.push("/login");
    },
    signOut() {
      const auth = getAuth();
      auth.signOut();
      this.$router.push("/");
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      //get user type
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        if (idTokenResult.claims.admin) {
          this.isAdmin = true;
        } else if (idTokenResult.claims.consultant) {
          this.isConsultant = true;
        } else {
          this.isUser = true;
        }
      }
      this.loading = false;
      this.user = user;
    });
  },
};
</script>

<style scoped>
header {
  background-color: rgb(1, 89, 88);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
}

.nav-links {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.nav-links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links a:hover {
  background-color: rgb(255, 255, 255);
  color: black;
}

.user-container {
  position: relative;
}

button {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  align-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.slide button:hover {
  background-color: white;
  color: black;
}
.slide {
  position: absolute;
  width: 100px;
  right: 0;
  background-color: rgba(1, 89, 88);
  padding: 2px;
  border: 0.5px solid #ccc;
  border-radius: 5px;
}

.user-photo {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid white;
  transition: border-color 0.3s ease;
}

.user-photo:hover {
  border-color: #00a0fc;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 80px;
  width: 95px;
}

.logo-container a {
  text-decoration: none;
  color: white;
  font-family: "Roboto", sans-serif;
  transition: color 0.3s ease;
}

.logo-container h1 {
  margin: 0;
  font-family: "Roboto", "Arial", sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
}

.logo-container a:hover {
  color: #949493;
}
</style>
