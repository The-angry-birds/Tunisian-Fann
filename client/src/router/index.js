import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "login",
            path: "/",
            component: () => import("@/components/LoginForm.vue"),
        },
        {
            name: "main",
            path: "/main",
            component: () => import("@/components/CategoriesTable.vue"),
        },
        
        
        
    ]
})