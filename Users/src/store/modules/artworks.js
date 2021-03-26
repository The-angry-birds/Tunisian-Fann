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
        state.type = type.type;
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
      //to verify which user is connected whether the guest otr the artist

    },
  };