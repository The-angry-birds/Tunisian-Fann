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
      path: "/informationCard",
      name: "informationCard",
      component: () => import("@/components/CardInformation.vue"),
    },
    {
      path: "/artworks",
      name: "artworks",
      component: () => import("@/components/Artworks.vue"),
    },
    {
      path: "/artists",
      name: "artists",
      component: () => import("@/components/Artists.vue"),
    },
    {
      path: "/join-as-artist",
      name: "join_Artist",
      component: () => import("@/components/JoinAsArtist.vue"),
    },
    {
      path: "/artist-profile",
      name: "artist",

      component: () => import("@/components/artist-profile.vue"),
    },
    {
      path: "/artist-profile-view",
      name: "ArtistProfileView",
      component: () => import("@/components/ArtistProfileView.vue"),
      props: { artworks: true },
    },

    {
      path: "/user-profile",
      name: "UserProfile",
      component: () => import("@/components/UserProfileX.vue"),
    },
    {
      path: "/auctions",
      name: "auctions",
      component: () => import("@/components/Auctions.vue"),
    },
    {
      path: "/auction-details",
      name: "auction-details",

      component: () => import("@/components/AuctionDetails.vue"),
    },
    {
      path: "/artwork-details",
      name: "artworkDetails",
      component: () => import("@/components/ArtworkDetails.vue"),
      props: true,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  console.log(store.state.auth.token);
  if (!store.state.auth.token) {
    console.log("No token here");
    next();
  } else {
    console.log(store.state.auth.user);
    if (Object.keys(store.state.auth.user).length) {
      console.log("and user logged in");
      next();
    } else {
      console.log("but user not logged in");
      const token = window.localStorage.getItem("token");
      const artist = await store
        .dispatch("verify_token", token)
        .then((data) => {
          console.log("reppppp", data);
          store.state.user = data;
        });
      console.log(artist);
    }
  }
  next();
});

export default router;
