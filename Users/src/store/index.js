import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import swal from "sweetalert";


Vue.use(Vuex);

const user = new Vuex.Store({
  state: {

    userStatus: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },

  mutations: {
    auth_request_user(state) {
      state.userStatus = "loading";
    },
    auth_success(state, token, user) {
      state.userStatus = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.userStatus = "error";
    },
    logout(state) {
      state.userStatus = "";
      state.token = "";
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.userStatus,
  },
  actions: {
    signup({ commit }, User) {
      return new Promise((resolve, reject) => {
        commit("auth_request_user");
        axios
          .post("http://localhost:3000/api/auth/users/signup", User)
          .then((resp) => {
            console.log("hhhhh", resp);
            const token = resp.data.token;
            console.log("hhhhh", token);
            const user = resp.data.user;

            localStorage.setItem("token", token);

            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request_user");
        axios
          .post("http://localhost:3000/api/auth/users/login", user)
          .then(({ data }) => {
            const token = data.token;
            const user = data.user;
            if (data.message === "wrong password") {
              swal("Oops!", "Wrong Password!", "error");
            } else if (data.message === "user not found") {
              swal("Oops!", "Wrong Email!", "error");
            } else {
              localStorage.setItem("token", token);
              commit("auth_success", token, user);
            }
            resolve(data);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");

        resolve();
      });
    },
  },
});
export default user;

