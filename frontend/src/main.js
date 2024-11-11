import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./routes/index.js";
import { clerkPlugin } from "vue-clerk";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const pinia = createPinia();

const app = createApp(App);
app.use(clerkPlugin, {
  publishableKey: PUBLISHABLE_KEY,
});
app.use(pinia);
app.use(router);
app.mount("#app");
