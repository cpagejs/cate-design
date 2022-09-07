import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.scss";
import components from "./components";

const app = createApp(App);

app.use(components).mount("#app");
