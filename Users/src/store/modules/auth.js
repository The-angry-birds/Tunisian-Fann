import axios from "axios";

export default {
  state: {
    token: window.localStorage.getItem("token") || "",
    user: {},
    type: "",
  },

  mutations: {
    auth_success(state, { token, user, type }) {
      state.token = token;
      state.user = user;
      state.type = type;
    },
    auth_error_or_logout(state) {
      state.token = "";
      state.user = {};
      state.type = "";
    },
  },
  getters: {
    logged: (state) => !!Object.keys(state.user).length,
    authStatus: (state) => state.authStatus,
    role: (state) => state.type,
  },
  actions: {
    //to verify which user is connected whether the guest or the artist
    verify_token({ commit }, token) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/auth/", { token })
          .then(({ data }) => {
            const { user, type } = data;
            console.log(type)
            console.log("tyyyyype", { user, token, type });
            commit("auth_success", { user, token, type });

            resolve(user);
          })
          .catch((err) => {
            commit("auth_error_or_logout");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    //signup for the artist
    register({ commit }, artist) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/auth/artists/signup", artist)
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;

            localStorage.setItem("token", token);

            commit("auth_success", { token, user, type: "artist" });
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error_or_logout");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    //login for the artist
    access({ commit }, user) {
      return new Promise((resolve, reject) => {
        console.log("calling login");
        axios
          .post("http://localhost:3000/api/auth/artists/login", user)
          .then(({ data }) => {
            const { token } = data;
            const user = data.user;
            localStorage.setItem("token", token);
            commit("auth_success", { token, user, type: "artist" });
            resolve(data);
          })
          .catch((err) => {
            commit("auth_error_or_logout");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    //signup for the guest
    signup({ commit }, User) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/auth/users/signup", User)
          .then((data) => {
            console.log("===>", data);
            const token = data.data.token;

            const user = data.data.user;
            console.log("===>", user);

            localStorage.setItem("token", token);

            commit("auth_success", { token, user, type: "guest" });

            resolve(data);
          })
          .catch((err) => {
            commit("auth_error_or_logout");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    //login for the guest
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/auth/users/login", user)
          .then((data) => {
            const token = data.data.token;
            const user = data.data.user;

            localStorage.setItem("token", token);
            commit("auth_success", { token, user, type: "guest" });

            resolve(data);
          })
          .catch((err) => {
            commit("auth_error_or_logout");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve) => {
        commit("auth_error_or_logout");
        localStorage.removeItem("token");
        console.log(localStorage);
        resolve();
      });
    },

    // getUser() {
    //   return new Promise((resolve, reject) => {
    //     const token = localStorage.getItem("token");
    //     axios
    //       .get("http://localhost:3000/api/auth/artists", {
    //         headers: { Authorization: `Bearer ${token}` },
    //       })
    //       .then(({ data }) => {
    //         console.log("iiiiiii", data);
    //         const { user, type } = data;
    //         commit("auth_success", { token, user, type: "guest" });
    //         resolve(data);
    //       })
    //       .catch((err) => {
    //         commit("auth_error_or_logout");
    //         localStorage.removeItem("token");
    //         reject(err);
    //       });
    //   });
    // },
  },
};
