import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

// TRANSLATIONS
import translationsEn from '@/locales/en.json';
import translationsRu from '@/locales/ru.json';
// import translationsUa from '@/locales/en.json';

// MODULES
import localize from '@/store/modules/localize.js';
import storageHelper from '@/helpers/persistentStorage.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        localize,
    },
});

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('ru', translationsRu);

Vue.i18n.set(storageHelper.getItem('locale') || 'en');
Vue.i18n.fallback('en');

export default store;