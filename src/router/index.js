import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/SignUp.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("../components/LogIn.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/profile.vue"),
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import("../components/Explore.vue"),
  },
  {
    path: "/Consultant",
    name: "Consultant",
    component: () => import("../components/Consultant.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/Admin.vue"),
  },
  {
    path: "/ConsultantInfo",
    name: "ConsultantInfo",
    component: () => import("../components/ConsultantInfo.vue"),
  },
  {
    path: "/ConsultantDetails",
    name: "ConsultantDetails",
    component: () => import("../components/ConsultantDetails.vue"),
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
    component: () => import("../components/test.vue"),
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: () => import("../components/contactUs.vue"),
  },
  {
    path: "/userRequest",
    name: "userRequest",
    component: () => import("../components/userRequest.vue"),
  },
  {
    path: "/chat",
    name: "Chatbot",
    component: () => import("../components/ChatBot.vue"),
  },
  {
    path: "/:notFound",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
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
