import axios from "axios";

export default {
  state: {
    authStatus: "",
    token: window.localStorage.getItem("token") || "",
    user: {},
  },

  mutations: {
    guest_success(state, user) {
      state.authStatus = "success";
      state.user = user;
    },
    artist_success(state, user) {
      state.authStatus = "success";
      state.user = user;
    },
    user_error(state) {
      state.authStatus = "error";
    },
  },
  getters: {
    logged: (state) => !!Object.keys(state.user).length,
  },
  actions: {
    verify_token({ commit }, token) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/auth/", { token })
          .then(({ data }) => {
            console.log("==========data", data);
            const { user, type } = data;
            if (type === "artist") {
              commit("artist_success", user);
            } else if (type === "guest") {
              commit("guest_success", user);
            }

            resolve(user);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
  },
};
