import Vue from "vue";
import Router from "vue-router";

import store from "../store";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/components/LandingPage.vue"),
    },
    {
      path: "/join-as-client",
      name: "join_Client",
      component: () => import("@/components/JoinAsClient.vue"),
    },
    {
      path: "/join-as-artist",
      name: "join_Artist",
      component: () => import("@/components/JoinAsArtist.vue"),
    },
    {
      path: "/artist-profile",
      name: "Artist",
      component: () => import("@/components/artist-profile.vue"),
    },
    {
      path: "/userProfil",
      name: "user",
      component: () => import("@/components/userProfil.vue"),
    },
    {
      path: "/auction-details",
      name: "auction-details",
      component: () => import("@/components/AuctionDetails.vue"),
    },
    {
      path: "/artwork-details",
      name: "artwork-details",
      component: () => import("@/components/ArtworkDetails.vue"),

      props: true,
    },
    {
      path: "/napil",
      name: "ArtistProfileX",
      component: () => import("@/components/ArtistProfileX.vue"),
    },
  ],
});

// router.beforeEach(async (to, from, next) => {
//   const token = window.localStorage.getItem('token');
//   if (to.name !== 'join_Artist' && store.getters.isLogged && token){
//     next()
//   }else if (to.name !== 'join_Artist' && !store.getters.isLogged && !token){
//     next({ name: 'join_Artist' })
//   }else {
//     if(token){
//       await store.dispatch('verifyToken', token)
//     } else{
//       next()
//     }
//   }
// })

// router.beforeEach(async (to, from, next) => {
//   console.log("+++", store);
//   console.log(store.state.user.token)
//   if (!store.state.user.token) {
//     console.log('No token here')
//     next();
//   } else {
//     console.log(store.state.user.user)
//     if (Object.keys(store.state.user.user).length) {
//       console.log('and user logged in')
//       next()
//     } else {
//       console.log('but user not logged in')
//       const token = window.localStorage.getItem("token");
//       const artist = await store.dispatch('verify_token', token)
//       console.log(artist)
//     }
//   }
//   next();
// });

router.beforeEach(async (to, from, next) => {
  console.log("+++", store);
  console.log(store.state.auth.token);
  if (!store.state.auth.token) {
    console.log("No token here");
    next();
  } else {
    console.log(store.state.auth.user);
    if (Object.keys(store.state.user.user).length) {
      console.log("and user logged in");
      next();
    } else {
      console.log("but user not logged in");
      const token = window.localStorage.getItem("token");
      const artist = await store.dispatch("verify_token", token);
      console.log(artist);
    }
  }
  next();
});
export default router;
