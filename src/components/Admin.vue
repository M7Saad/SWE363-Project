<template>
    <div id="admin">
      <Navbar />
  
      <div class="content">
        <h1>Consultant Requests</h1>
        <div v-for="request in requests" :key="request.id" class="request">
          <h2>{{ request.name }}</h2>
          <p>{{ request.description }}</p>
          <button @click="approveRequest(request.id)">Approve</button>
          <button @click="rejectRequest(request.id)">Reject</button>
        </div>
      </div>
  
      <Footer />

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        requests: [
          { id: 1, name: 'Ali Ahmed', description: 'Financial Consulting' },
          { id: 2, name: 'Zahid Sami', description: 'Human Resources Consulting' },
          { id: 2, name: 'Zahid Sami', description: 'Human Resources Consulting' },

        ]
      };
    },
    methods: {
      approveRequest(id) {
        console.log(`Approving request with id ${id}`);
      },
      rejectRequest(id) {
        console.log(`Rejecting request with id ${id}`);
      }
    }
  };
  </script>
  <script setup>
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";
  </script>
  
  <style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .request {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    width: 80%;
  }
  html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
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
  margin: 10px
}


img {
  max-width: 100%;
  height: auto;
}
  </style>