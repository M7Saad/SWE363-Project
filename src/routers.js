// src/router/index.js
import App from './App.vue';
import Home from './components/Home.vue';
import LogIn from './components/LogIn.vue';
import SignUp from './components/SignUp.vue';
import ProfileInfo from './components/ProfileInfo.vue';

import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [

  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/profile-info',
    name: 'ProfileInfo',
    component: ProfileInfo,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
