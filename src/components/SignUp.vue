<template>
  <div>
    <img
      src="../assets/mustasharak-logo.png"
      alt="Mustasharak Logo"
      class="logo"
    />
    <h2>Sign up</h2>
    <form @submit.prevent="signUp">
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
    <br />
    <br />
    <router-link to="/login"
      >Already have a Mustasharak account? login</router-link
    >
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
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

<style scoped>
.logo {
  width: 800px;
  margin-bottom: 50px;
}
</style>
