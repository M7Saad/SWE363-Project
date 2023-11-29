// src/router/index.js
import App from "./App.vue";
import Home from "./components/Home.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import ProfileInfo from "./components/ProfileInfo.vue";
import sample_auth from "./components/sample_auth.vue";
import profile from "./components/profile.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/temp", //TODO
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/profile-info",
    name: "ProfileInfo",
    component: ProfileInfo,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login", //TODO
    name: "auth",
    component: sample_auth,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
