const setItem = (key, data) => {
    try {
        return localStorage.setItem(key, JSON.stringify(data))
    } catch(e) {
        console.log('[Locale Storage] Error save data ', e);
    }
}

const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch(e) {
        console.log('[Locale Storage] Error get data ', e);
    }
}

export default {
    setItem,
    getItem,
};