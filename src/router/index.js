// src/router/index.js
import App from "../App.vue";
import Home from "../components/Home.vue";
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";
import profile from "../components/profile.vue";
import Explore from "../components/Explore.vue";
import Consultant from "../components/Consultant.vue";
import Admin from "../components/Admin.vue";
import ConsultantInfo from "../components/ConsultantInfo.vue";
import ConsultantDetials from "../components/ConsultantDetials.vue";
import test from '../components/test.vue'; 


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
  {
    path: "/explore",
    name: "explore",
    component: Explore,
  },
  {
    path: "/Consultant",
    name: "Consultant",
    component: Consultant,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/ConsultantInfo",
    name: "ConsultantInfo",
    component: ConsultantInfo,
  },
  {
    path: "/ConsultantDetials",
    name: "ConsultantDetials",
    component: ConsultantDetials,
  },
  {
    path: "/test",
    name: "test",
    component: test,
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
