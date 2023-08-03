import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/scss/style.scss";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).mount("#app").use(pinia);
