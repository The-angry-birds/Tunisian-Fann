import axios from "axios";

export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    artist: {},
  },

  mutations: {
    auth_request(state) {
      state.status = "loading";
    },

    auth_success(state, { token, artist }) {
      state.status = "success";
      state.token = token;
      state.artist = artist;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  getters: {
    isLogged: (state) => !!state.token,
    status: (state) => state.status,
    getArtist: (state) => state.artist,
  },

  actions: {
    register({ commit }, artist) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post("http://localhost:3000/api/auth/artists/signup", artist)
          .then((resp) => {
            const token = resp.data.token;
            const artist = resp.data.user;

            localStorage.setItem("artist-token", token);

            commit("auth_success", { token, artist });
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("artist-token");
            reject(err);
          });
      });
    },

    access({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post("http://localhost:3000/api/auth/artists/login", user)
          .then(({ data }) => {
            const { token } = data;
            const artist = data.user;
            localStorage.setItem("token", token);
            commit("auth_success", { token, artist });
            resolve(data);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    // verifyToken({commit}, token){
    // return new Promise((resolve,reject)=>{

    //         axios.get("http://localhost:3000/api/auth/artists/verify", {
    //           headers: { Authorization: `Bearer ${token}` },
    //         })
    //         .then(({data}) => {
    //           commit('auth_success', data)
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //           reject(err)
    //         });
    // })
    // }
  },
};
