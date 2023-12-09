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
import ConsultantDetails from "../components/ConsultantDetails.vue";
import test from "../components/test.vue";
import contactUs from "../components/contactUs.vue";
import NotFound from "../components/NotFound.vue";
import userRequest from "../components/userRequest.vue";

import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
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
    path: "/ConsultantDetails",
    name: "ConsultantDetails",
    component: ConsultantDetails,
    beforeEnter: (to, from, next) => {
      const auth = getAuth();
      if (auth.currentUser) {
        next();
      } else {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      }
    },
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: contactUs,
  },
  {
    path: "/userRequest",
    name: "userRequest",
    component: userRequest,
  },
  {
    path: "/:notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
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
