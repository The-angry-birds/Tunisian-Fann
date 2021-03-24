import Vue from "vue";
import Vuex from "vuex";

// import axios from "axios";
import artist from "./modules/artist.js";
import user from "./modules/user.js";





Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    artist,
    user,
  }})

       
     