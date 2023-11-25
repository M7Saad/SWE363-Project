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
export default {
  name: "LogIn",
  data() {
    return {
      Email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$router.push("/home");
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
