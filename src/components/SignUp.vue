<template>
  <div>
    <Navbar />
    <main>
      <div class="signup-header">
        <h2>Sign up</h2>
      </div>
      <div class="signup-container">
        
        <form @submit.prevent="signUp" class="signup-form">
          <div class="form-floating mb-3">
            <input
              name="name"
              type="text"
              class="form-control"
              id="name"
              placeholder="name"
              required
            />
            <label for="name">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              name="photoURL"
              type="link"
              class="form-control"
              id="photoURL"
              placeholder="photoURL"
            />
            <label for="photoURL">photoURL (Optional)</label>
          </div>
          <div class="form-floating mb-3">
            <input
              name="email"
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
              name="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <br />
          <button type="submit">Sign up</button>
        </form>
        <div class="login-link">
          <router-link to="/login">Already have a Mustasharak account? Login</router-link>
        </div>
      </div>
    </main>
    <Footer />

  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  beforeRouteEnter(to, from, next) {
    const auth = getAuth();
    if (auth.currentUser) {
      next("/");
    } else {
      next();
    }
  },
  name: "SignUp",
  data() {
    return {
      Email: "",
      password: "",
    };
  },
  methods: {
    signUp(submitEvent) {
      console.log("register");
      // data update
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;
      this.name = submitEvent.target.elements.name.value;
      this.photoURL = submitEvent.target.elements.photoURL.value;

      // firebase registration
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          //add name, photoURL
          user.displayName = this.name;
          user.photoURL = this.photoURL;
          console.log(user);
          console.log(user.displayName);
          console.log("Registration completed");
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert(`Error: ${errorMessage}`);
        });
    },
  },
};
</script>
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px);
}

.signup-container {
  width: 1500px;
  height: 700px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.form-floating {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
}

.login-link {
  margin-top: 20px;
  text-align: center;
}


.signup-header {
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
