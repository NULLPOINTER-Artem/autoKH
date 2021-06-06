import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/pages/About.vue"),
    },
    {
        path: '/services',
        name: "Services",
        component: () => import(/* webpackChunkName: "services" */ "../views/pages/Services.vue"),
    },
    {
        path: '/contacts',
        name: "Contacts",
        component: () => import(/* webpackChunkName: "contacts" */ "../views/pages/Contacts.vue"),
    },
    {
        path: '/works',
        name: "Works",
        component: () => import(/* webpackChunkName: "works" */ "../views/pages/Works.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;