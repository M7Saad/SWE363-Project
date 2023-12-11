<template>
  <Navbar />
  <div class="main-container">
    <div class="login-container">
      <h2>Sign in</h2>
      <form @submit.prevent="login" id="loginForm">
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
          >Don't have an account? Sign up here</router-link
        >
        <br />
        <br />

        <!-- <button type="submit">Login</button> -->
      </form>
      <!-- <button @click="signInWithGoogle">Sign in with Google</button> -->
      <button class="login-button" type="submit" form="loginForm">LOGIN</button>
      <button class="google-login-button" @click="signInWithGoogle">
        <img
          src="./assets/google-logo.png"
          alt="Google Logo"
          class="google-logo"
        />
        SIGN IN WITH GOOGLE
      </button>
      <template> </template>
    </div>
    <Footer />
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default {
  beforeRouteEnter(to, from, next) {
    const auth = getAuth();
    if (auth.currentUser) {
      next("/:notFound");
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
    async signInWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        this.$router.push(this.$route.query.redirect || "/");
      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, email, credential);
      }
    },
    login(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push(this.$route.query.redirect || "/");
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
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  min-height: 100vh;
}

.login-container {
  width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 200px;
  margin-bottom: 50px;
}

button {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-button,
.google-login-button {
  padding: 10px 20px;
  margin: 10px;
  justify-content: center;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.login-button {
  background-color: #8e44ad;
  color: #fff;
}

.google-login-button {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
}

.google-logo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
