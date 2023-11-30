<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <h2>{{ user.displayName }}</h2>
    <p>Email: {{ user.email }}</p>
    <img :src="user.photoURL" alt="User Avatar" />
    <p>Email Verified: {{ user.emailVerified }}</p>
    <p>User ID: {{ user.uid }}</p>
    <p>Bio: {{ bio }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";
import axios from "axios";

export default {
  name: "Profile",
  setup() {
    const user = ref(null);
    const bio = ref("");
    const loading = ref(true);

    onMounted(async () => {
      const auth = getAuth();
      user.value = auth.currentUser;

      if (user.value) {
        try {
          const response = await axios.get(`http://localhost:6969/user/john`);
          bio.value = response.data.bio;
          console.log(response.data.bio);
        } catch (error) {
          console.error("Failed to load bio:", error);
        }
      }

      loading.value = false;
    });

    return {
      user,
      bio,
      loading,
    };
  },
};
</script>

<style>
/* Add your custom styles here */

.profile-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-picture {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #fff;
  border-radius: 50%;
}

.profile-name {
  color: #333;
}

.profile-bio {
  color: #555;
}

.login-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-message {
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
