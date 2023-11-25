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
      <router-link to="/"
        >Already have a Mustasharak account? login</router-link
      >
      <br />
      <br />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      Email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      this.$router.push("/profile-info");
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
