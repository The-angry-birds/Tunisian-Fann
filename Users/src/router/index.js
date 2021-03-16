import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import("@/components/Carousel.vue"),
        },
        {
            path: "/join-as-client",
            component: () => import("@/components/JoinAsClient.vue"),
        },
        {
            path: "/join-as-artist",
            component: () => import("@/components/JoinAsArtist.vue"),
        },

    ]
})