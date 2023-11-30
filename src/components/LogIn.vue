<template>
  <div>
    <img
      src="../assets/mustasharak-logo.png"
      alt="Mustasharak Logo"
      class="logo"
    />
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
      <router-link to="/sign-up"
        >Don't have a Mustasharak account? Sign up here</router-link
      >
      <br />
      <br />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
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
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_1 = document.querySelector("#alert_1");
          alert_1.classList.remove("d-none");
          alert_1.innerHTML = errorMessage;
          console.log(alert_1);
        });
    },
    moveToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.logo {
  width: 800px;
  margin-bottom: 50px;
}
</style>
