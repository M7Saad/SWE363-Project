<template>
  <div>
    <img
      src="../assets/mustasharak-logo.png"
      alt="Mustasharak Logo"
      class="logo"
    />
    <h2 style="font-family: 'Secular One', sans-serif">
      Fill Your Profile Info
    </h2>
    <form @submit.prevent="fillProfileInfo">
      <div class="input-group">
        <span class="input-group-text">First and last name</span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          id="firstName"
          required
        />
        <input
          type="text"
          aria-label="Last name"
          class="form-control"
          id="lastName"
          required
        />
      </div>

      <br />

      <div class="input-group mb-3">
        <span class="input-group-text" id="username">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="username"
          required
        />
      </div>

      <br />

      <div class="input-group mb-3">
        <span class="input-group-text" id="phoneNumber">+</span>
        <input
          type="text"
          class="form-control"
          placeholder="Phone number"
          aria-label="phoneNumber"
          aria-describedby="phoneNumber"
          required
        />
      </div>

      <br />

      <div class="mb-3">
        <label for="formFile" class="form-label"
          >Upload profile picture (optional)
        </label>
        <input class="form-control" type="file" id="formFile" />
      </div>

      <br />

      <div class="input-group mb-3">
        <label class="input-group-text" for="gender">Gender (optional)</label>
        <select class="form-select" id="gender">
          <option selected>Choose...</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </div>

      <button type="submit">Save Profile</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phoneNumber: "",
      formFile: "",
      gender: "",
    };
  },
  methods: {
    fillProfileInfo() {
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
