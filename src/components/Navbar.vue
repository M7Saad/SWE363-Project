<template>
  <header>
    <h1>Mustashark</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Dashboard</a>
      <a href="#/contactUs">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
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
</style>
