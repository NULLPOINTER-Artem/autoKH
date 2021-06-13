import Vue from "vue";
import VueRouter from "vue-router";
import { Trans } from './../plugins/Translation.js'

function load(component) {
    return () => import(`@/views/pages/${component}.vue`)
}

Vue.use(VueRouter);

const routes = [{
    path: '/:locale',
    component: {
        template: "<router-view></router-view>"
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
        {
            path: '',
            name: 'Home',
            component: load('Home')
        },
        {
            path: 'about',
            name: 'About',
            component: load('About')
        },
        {
            path: 'contacts',
            name: 'Contacts',
            component: load('Contacts')
        },
        {
            path: 'services',
            name: 'Services',
            component: load('Services')
        },
        {
            path: 'works',
            name: 'Works',
            component: load('Works')
        },
    ]
},
{
    path: '*',
    redirect() {
        return Trans.defaultLocale
    }
}
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;