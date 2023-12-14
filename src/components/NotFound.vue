<template>
  <center>
    <h1 style="color: red =font-family: 'Secular One', sans-serif">
      Not Found! 404!
    </h1>
    <h2>
      You probably were typing the links manually. Make sure not to mess with
      that and follow routes :]
    </h2>
    <p>Your IP address is: {{ ip }}</p>
    <p>
      <a href="/">Go home?</a>
    </p>
  </center>
</template>

<script>
import axios from "axios";

export default {
  name: "NotFound",
  data() {
    return {
      ip: "",
    };
  },
  created() {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        this.ip = response.data.ip;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
center {
  margin: 15vw;
}

h1 {
  color: var(--border);
  font-size: 2em;
}
</style>
