
import axios from "axios"


export default {


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
     isLoggedInuser: (state) => !!state.token,
    authStatususer: (state) => state.userStatus,
    getuser: (state) => state.user
  }, 
  actions: {






    signup({ commit }, User) {
      return new Promise((resolve, reject) => {
      commit("auth_request_user");
        axios
          .post("http://localhost:3000/api/auth/users/signup", User)
          .then((data) => {
            console.log("===>", data);
            const token = data.data.token;
           
            const user = data.data.user;
            console.log("===>",user)

//             localStorage.setItem("token", token);

            commit("auth_success", token, user);  
            resolve(data);
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
          .then((data) => {
            const token = data.data.token;
            const user = data.data.user;
             console.log("=====>",user)
              localStorage.setItem("token", token);
              commit("auth_success", token, user);
            
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
