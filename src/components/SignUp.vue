<template>
  <header>
    <h1>Mustashark</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <div>
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
  <footer>
    <p>© 2024 Mustashark. All rights reserved.</p>
  </footer>
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
  background-color: indigo;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}

footer {
  background-color: indigo;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
