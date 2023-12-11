<template>
  <div id="admin">
    <Navbar />

    <div class="content">
      <h1>Consultant Requests</h1>
      <div v-for="request in requests" :key="request.id" class="request">
        <div>
          <h2>Name: {{ request.name }}</h2>
          <p>Description: {{ request.description }}</p>
          <p>Price: {{ request.price }} $</p>
          <p>Experience: {{ request.experience }} years</p>
          <p>Qualifications: {{ request.qualifications }}</p>
          <p>Consultancy Types: {{ request.consultancyTypes }}</p>
        </div>
        <button @click="approveRequest(request.id)">Approve</button>
        <button @click="rejectRequest(request.id)">Reject</button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onIdTokenChanged } from "firebase/auth";
import { Consultant } from "../classes.js";
export default {
  beforeRouteEnter(_, __, next) {
    const auth = getAuth();
    onIdTokenChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // Check if the user is an admin.
        if (idTokenResult.claims.admin) {
          next();
        } else {
          next("/goaway");
        }
      } else {
        next("/goaway");
      }
    });
  },
  // ...
  data() {
    return {
      requests: [],
    };
  },
  created() {
    console.log("created");
    const db = getDatabase();
    const usersRef = ref(db, "Users");

    //hey
    onValue(usersRef, (snapshot) => {
      console.log(snapshot.val());
      const data = snapshot.val();
      this.requests = []; // Clear the existing requests

      for (let userId in data) {
        const user = data[userId];
        if (user.pending) {
          console.log(user.pending);
          for (let requestId in user.pending) {
            const request = user.pending[requestId];
            this.requests.push(
              new Consultant(
                request.name,
                request.experience,
                request.price,
                request.photo,
                request.qualifications,
                request.consultancyTypes,
                request.description
              )
            );
          }
        }
      }
    });
  },
  methods: {
    approveRequest(id) {
      console.log(`Approving request with id ${id}`);
    },
    rejectRequest(id) {
      console.log(`Rejecting request with id ${id}`);
    },
  },
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
html,
body,
#app {
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
  margin: 10px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
