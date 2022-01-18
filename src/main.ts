import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BalmUI from "balm-ui";
// import BalmUIPlus from "balm-ui-plus";
import "balm-ui-css";


createApp(App).use(router).use(BalmUI).use(store).mount("#app");
