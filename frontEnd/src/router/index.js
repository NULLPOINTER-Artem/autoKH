import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import storageHelper from '@/helpers/persistentStorage.js';

const localeFromStorage = storageHelper.getItem('locale') || 'en';

if (
    location.pathname === '/' || 
    location.pathname !== ('/' + localeFromStorage + '/') || 
    !location.pathname
) {
    location.replace('/' + localeFromStorage + '/');
}

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: true,
    },
    {
        path: '/about',
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/pages/About.vue"),
        props: true,
    },
    {
        path: '/services',
        name: "Services",
        component: () => import(/* webpackChunkName: "services" */ "../views/pages/Services.vue"),
        props: true,
    },
    {
        path: '/contacts',
        name: "Contacts",
        component: () => import(/* webpackChunkName: "contacts" */ "../views/pages/Contacts.vue"),
        props: true,
    },
    {
        path: '/works',
        name: "Works",
        component: () => import(/* webpackChunkName: "works" */ "../views/pages/Works.vue"),
        props: true,
    },
];

const router = new VueRouter({
    base: '/' + localeFromStorage,
    mode: "history",
    routes,
});

export default router;