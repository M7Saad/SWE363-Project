<template>
  <div id="app">
    <Navbar />

    <div class="content">
      <form id="add_offer">
        <h1>Add new consulting offer</h1>
        <div class="col">
          <label for="message">Description:</label>
          <textarea id="description" rows="4" cols="50" required></textarea>
          <br>
          <div>
            <label for="number">Your price per hour:</label>
            <input type="number" id="price" min="100" max="3000" placeholder="300$" required>
          </div>
          <label for="type">Types:</label>
          <select id="types" required>
            <option value="financial">Financial Consulting</option>
            <option value="human resources">Human Resources Consulting</option>
            <option value="strategy">Strategy Consulting</option>
            <option value="information technology">Information Technology Consulting</option>
            <option value="operations">Operations Consulting</option>
          </select>
          <br>
          <input type="submit" value="Add">
        </div>
      </form>

      <div id="consultation">
        <h1 id="cases">Consultation Cases</h1>
        <div id="cases_box"></div>
      </div>
    </div>

    <footer>
      <p>© 2024 Mustashark. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    const addCase = (name, phoneNumber) => {
      var casesBox = document.getElementById("cases_box");

      var caseElement = document.createElement("div");
      caseElement.className = "case";

      caseElement.innerHTML = "<strong>Name:</strong> " + name + "<br><strong>Phone:</strong> " + phoneNumber;

      var selectBox = document.createElement("div");
      selectBox.className = "select-box";

      var selectElement = document.createElement("select");

      var statuses = ["In Progress", "Rejected", "Finished"];
      statuses.forEach(function (status) {
        var option = document.createElement("option");
        option.value = status.toLowerCase().replace(/\s/g, "-");
        option.text = status;
        selectElement.add(option);
      });

      selectBox.appendChild(selectElement);
      caseElement.appendChild(selectBox);
      casesBox.appendChild(caseElement);
      casesBox.appendChild(document.createElement("hr"));
    };

    addCase("Ali Ahmed", "0345533555");
    addCase("Zahid Sami", "055545505");
  },
};
</script>
<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#add_offer {
  margin-bottom: 50px;
}

.form-container {
  text-align: center;
}

.offer-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.columns {
  display: grid;
  grid-gap: 15px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="submit"] {
  padding: 5px 30px;
  background-color: #254d26;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

#cases {
  margin-top: 50px;
}

#cases_box {
  background-color: gainsboro;
  border: solid 1px;
  height: 400px;
  width: 1142px;
  overflow: auto;
  margin: 0 auto;
}

.case {
  border: solid 1px;
  padding: 10px;
  margin: 5px;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

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

main {
  padding: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  flex: 1;
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

img {
  max-width: 100%;
  height: auto;
}
</style>