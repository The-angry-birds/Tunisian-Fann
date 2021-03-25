import axios from "axios";
import swal from "sweetalert";
export default {
  state: {
    userStatus: "",
    token: window.localStorage.getItem("token") || "",
    user: {},
  },

  mutations: {
    auth_request_user(state) {
      state.userStatus = "loading";
    },
    auth_success(state, user) {
      state.userStatus = "success";
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
    authStatus: (state) => state.userStatus,
    isLoggedIn: (state) => !!Object.keys(state.user).length
  },
  actions: {

    verify_token({ commit }, token) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/auth/artists/verify", {token})
          .then(({data}) => {
            const {artist} = data
            console.log("hhhhh", data);

            commit("auth_success", artist);
            resolve(artist);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

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
};
