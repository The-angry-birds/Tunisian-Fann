import Vue from "vue";
import Vuex from "vuex";

import artist from "./modules/artist.js";
import user from "./modules/user.js";
import auth from "./modules/auth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    artist,
    user,
    auth,
  },
});
