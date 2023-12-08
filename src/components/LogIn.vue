<template>
  <Navbar />
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          required
        />
        <label for="email">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
        />
        <label for="password">Password</label>
      </div>
      <br />
      <router-link to="/signup"
        >Don't have a Mustasharak account? Sign up here</router-link
      >
      <br />
      <br />

      <button type="submit">Login</button>
    </form>
  </div>
  <Footer />
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  beforeRouteEnter(to, from, next) {
    const auth = getAuth();
    if (auth.currentUser) {
      next("/");
    } else {
      next();
    }
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          password.value = "";
          alert(`Error: ${errorMessage}`);
        });
    },
    moveToRegister() {
      this.$router.push("/signup");
    },
  },
};
</script>
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
.logo {
  width: 800px;
  margin-bottom: 50px;
}

button {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
