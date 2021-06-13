import axios from '@/api/axios.js';

const setLocalize = (locale) => {
    return axios.post('/setLocale', locale);
};

const getLocalize = () => {
    return axios.post('/getLocale');
};

export default {
    setLocalize,
    getLocalize,
};