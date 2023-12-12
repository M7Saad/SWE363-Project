<template>
  <div id="admin">
    <Navbar />

    <div class="content">
      <h1>Consultant Requests</h1>
      <div v-for="request in requests" :key="request.id" class="request">
        <div>
          <h2>Name: {{ request.name }}</h2>
          <p>User ID: {{ request.userId }}</p>
          <p>Description: {{ request.description }}</p>
          <p>Price: {{ request.price }} $</p>
          <p>Experience: {{ request.experience }} years</p>
          <p>Qualifications: {{ request.qualifications }}</p>
          <p>Consultancy Types: {{ request.consultancyTypes }}</p>
        </div>
        <button @click="approveRequest(request)">Approve</button>
        <button @click="removeRequest(request.userId)">Reject</button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { getDatabase, ref, onValue, remove, set } from "firebase/database";
import { getAuth, onIdTokenChanged } from "firebase/auth";
import axios from "axios";

//we will process everything from the client side
//no need to use cloud functions because there is no business logic
//nor any security concerns

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
    const db = getDatabase();
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      console.log(snapshot.val());
      const data = snapshot.val();
      this.requests = []; // Clear the existing requests

      for (let userId in data) {
        const user = data[userId];
        if (user.pending) {
          let request = user.pending;
          this.requests.push({
            userId: userId,
            name: request.name,
            photo: request.photo,
            description: request.description,
            price: request.price,
            experience: request.experience,
            qualifications: request.qualifications,
            consultancyTypes: request.consultancyTypes,
          });
        }
      }
    });
  },
  methods: {
    async approveRequest(consultant) {
      //push the consultant to the database
      const db = getDatabase();
      const dbRef = ref(db, "consultants/" + consultant.userId);
      //if the user is already there, then update the data
      await set(dbRef, {
        name: consultant.name,
        experience: consultant.experience,
        price: consultant.price,
        photo: consultant.photo,
        qualifications: consultant.qualifications,
        consultancyTypes: consultant.consultancyTypes,
        description: consultant.description,
      });
      //make the user a consultant
      //regenerate the token
      const auth = getAuth();
      let token = await auth.currentUser.getIdToken(true);
      axios.post(
        "http://127.0.0.1:5001/swe363-321-project/us-central1/makeUserConsultant",
        {
          uid: consultant.userId,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      this.removeRequest(consultant.userId);
    },
    async removeRequest(req) {
      const db = getDatabase();
      console.log("Removing request from the database: ", req);
      const requestRef = ref(db, "users/" + req + "/pending");

      // Remove the request from the database
      await remove(requestRef);

      console.log("Request removed from the database: ", req);
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
