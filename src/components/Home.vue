<template>
  <img
    src="../assets/mustasharak-logo.png"
    alt="Mustasharak Logo"
    class="logo"
  />
  <h2>This is your home page</h2>
  <p>
    You can access this page without logging in. However, if you try to access
    the <router-link to="/profile">Profile</router-link> page, you will be
    redirected to the login page.
  </p>
  <p>
    you can login by clicking on the button below
    <router-link to="/login">login</router-link>
  </p>
</template>

<script></script>

<style scoped>
.logo {
  width: 800px;
  margin-bottom: 50px;
}
</style>
