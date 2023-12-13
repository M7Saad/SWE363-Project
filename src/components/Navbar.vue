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

      <button v-else @click="signIn" style="font-weight: bold">Sign In</button>
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
          tthis.isConsultant = true;
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
  justify-content: space-between;
}

.nav-links a {
  margin: 0 15px;
  color: white;

  text-decoration: none;
  text-transform: uppercase;
}

.user-container {
  position: relative;
}

button {
  background-color: white;
  color: indigo;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-photo {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 18px;
  cursor: pointer;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 80px;
  width: 95px;
}

.slide {
  position: absolute;
  width: 120px;
  right: 0;
  background-color: white;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.nav-links a {
  font-weight: bold;
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

.nav-links a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #00a0fc;
}
</style>
