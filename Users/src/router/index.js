import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
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
      props:true
    },
    {
      path: "/napil",
      name: "ArtistProfilX",
      component: () => import("@/components/ArtistProfileX.vue"),
    },
  ],
});
