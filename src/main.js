import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./assets/sass/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
