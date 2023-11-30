// src/router/index.js
import App from "../App.vue";
import Home from "../components/Home.vue";
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";
import profile from "../components/profile.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
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

/* TODO:
router.beforeEach((to, from, next) => {
  const auth = getAuth();

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert("You've must been logged to access this area");
      router.push("/");
    }
  } else {
    next();
  }
});
*/
export default router;
