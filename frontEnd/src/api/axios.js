import axios from 'axios';
import storageHelper from '@/helpers/persistentStorage.js'

axios.defaults.baseURL = 'http://192.168.1.10:8080/api' // FIX ME - WHEN CREATE FTP-SERVER

axios.interceptors.request.use(config => {
    const token = storageHelper.getItem('token');
    const authorizationToken = token ? `Bearer ${token}` : '';
    config.headers.Authorization = authorizationToken;
    return config;
});

export default axios;