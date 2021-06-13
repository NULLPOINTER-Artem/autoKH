import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from '@/store';
import { i18n } from './i18n.js';
import { Trans } from './plugins/Translation.js'

// Styles
import '@/styles/main.scss'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false;

new Vue({
    i18n,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');