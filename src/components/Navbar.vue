<template>
  <header>
    <h1>Mustashark</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Dashboard</a>
      <a href="#/contactUs">Contact</a>
      <div
        v-if="user"
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
            <button @click="signOut">Sign Out</button>
          </div>
        </transition>
      </div>
      <button v-else @click="signIn">Sign In</button>
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
      user: null,
      showSlide: false,
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
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
};
</script>

<style scoped>
header {
  background-color: indigo;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}

nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
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
  cursor: pointer;
}

.slide {
  position: absolute;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
