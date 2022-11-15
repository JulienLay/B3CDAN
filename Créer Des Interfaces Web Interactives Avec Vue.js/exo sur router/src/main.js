import App from "./App.js";
import router from "../router/index"

const options = {
    data() {
        return {
          message : "Message",
        };
    },
    components : {
        App,
    },
};

const app = Vue.createApp(options);

app.use(router);

app.mount("#app");