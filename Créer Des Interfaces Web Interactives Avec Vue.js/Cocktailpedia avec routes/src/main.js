import App from "./App.js";
import MainMenu from "./components/MainMenu.js";
import router from "./router/index.js";

const options = {
  components: {
    App,
    MainMenu
  },
};

const app = Vue.createApp(options);

app.use(router);

app.mount("#app");
