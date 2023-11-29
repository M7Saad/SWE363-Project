<template>
  <div>
    <h1>Profile</h1>
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <img :src="user.picture" alt="Profile" />
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "Profile",
  setup() {
    const { user, isLoading } = useAuth0();

    return {
      user,
      isLoading,
    };
  },
};
</script>
