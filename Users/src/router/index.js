import Vue from "vue";
import Router from "vue-router";
import store from '../store'
Vue.use(Router);

const router= new Router({
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
      path: "/Artist-profile",
      name: "Artist",
      component: () => import("@/components/Artistprofile.vue"),
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
    },
    {
      path: "/napil",
      name: "ArtistProfileX",
      component: () => import("@/components/ArtistProfileX.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (store.state.isLoggedIn) {
    next();
  } else {
    // check if there's a token
    const token = window.localStorage.getItem("token");
    console.log(token);
    if (token) {
      // send a request to /verify => user
      store.state.currentUser = { name: "zineb" };
      next();
    } else {
      next();
    }
  }
  next();
});

export default router;
