import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-ywpikhubj75g1a4r.us.auth0.com",
    clientId: "rbFlJCv2fPIIJ1ac5Ta0h3t9Sotvvfxa",
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  })
);

app.use(router).mount("#app");
