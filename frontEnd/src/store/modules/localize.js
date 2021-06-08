import Vue from 'vue';
import localizeAPI from '@/api/localize.js';
import storageHelper from '@/helpers/persistentStorage.js';

const state = {
    error: '',
    isLoading: false,
    fallback: 'en',
    locale: storageHelper.getItem('locale') || 'en',
};

export const localizeActionTypes = {
    getLocalize: 'localize/getLocalize',
    setLocalize: 'localize/setLocalize',
};
export const localizeMutationTypes = {
    setLocale: 'localize/setLocale',

    // WORK WITH ACTIONS
    getLocalizeStart: 'localize/getLocalizeStart',
    getLocalizeSuccess: 'localize/getLocalizeSuccess',
    getLocalizeFailure: 'localize/getLocalizeFailure',

    setLocalizeStart: 'localize/setLocalizeStart',
    setLocalizeSuccess: 'localize/setLocalizeSuccess',
    setLocalizeFailure: 'localize/setLocalizeFailure',
};
export const localizeGetterTypes = {
    getLocale: 'localize/getLocale',
};

const actions = {
    [localizeActionTypes.setLocalize](context, locale) {
        return new Promise(resolve => {
            context.commit(localizeMutationTypes.setLocalizeStart);
            localizeAPI.setLocalize(locale).then((response) => {
                context.commit(localizeMutationTypes.setLocalizeSuccess, response.data);
                resolve(response.data);
            }).catch(() => {
                context.commit(localizeMutationTypes.setLocalizeFailure);
            })
        })
    },
    [localizeActionTypes.getLocalize](context) {
        return new Promise(resolve => {
            context.commit(localizeMutationTypes.getLocalizeStart);
            localizeAPI.getLocalize().then((response) => {
                context.commit(localizeMutationTypes.getLocalizeSuccess, response.data);
                resolve(response.data);
            }).catch(() => {
                context.commit(localizeMutationTypes.getLocalizeFailure);
            })
        })
    },
};
const mutations = {
    [localizeMutationTypes.setLocale](state, payload) {
        storageHelper.setItem('locale', payload);
        state.locale = payload
        Vue.i18n.set(state.locale);
    },

    // WORK WITH ACTIONS
    [localizeMutationTypes.getLocalizeStart](state) {
        state.isLoading = true
    },
    [localizeMutationTypes.getLocalizeSuccess](state, payload) {
        state.isLoading = false
        storageHelper.setItem('locale', payload);
        state.locale = payload
        Vue.i18n.set(state.locale);
    },
    [localizeMutationTypes.getLocalizeFailure](state, payload) {
        state.isLoading = false
        state.error = payload
        state.locale = 'en'
        Vue.i18n.set(state.locale);
    },

    [localizeMutationTypes.setLocalizeStart](state) {
        state.isLoading = true
    },
    [localizeMutationTypes.setLocalizeSuccess](state) {
        state.isLoading = false
    },
    [localizeMutationTypes.setLocalizeFailure](state, payload) {
        state.isLoading = false
        state.error = payload
    },
};
const getters = {
    [localizeGetterTypes.getLocale]: state => {
        return state.locale
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};