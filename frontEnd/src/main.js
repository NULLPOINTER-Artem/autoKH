import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from '@/store';

// Styles
import '@/styles/main.scss'

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');