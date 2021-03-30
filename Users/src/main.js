import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// import * as VueStripe from "@vue-stripe/vue-stripe";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
// Vue.use(
//   VueStripeCheckout,
//   "pk_test_51ISo8BBdTsia79TvvPiOhcEdgJW5RrLgYuqSmgo7FwC1JdsSIeCd0O867AdapRzapwhZYY8mCfrbqK9yHTh3LPxf00pIAjIYFw"
// );

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
