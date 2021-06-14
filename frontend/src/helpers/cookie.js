const cookieObj = {
    locale: '',
};

const clearCookieObj = () => {
    Object.keys(cookieObj).forEach(key => {
        cookieObj[key] = ''
    });
}

const clearCookie = () => {
    document.cookie = '';
};

const setCookie = (key, value) => {
    for (let [key, value] of Object.entries(getCookie() ?? {})) {
        cookieObj[key] = value;
    }

    cookieObj[key] = value;

    clearCookie();
    document.cookie = 'cookieObj=' + JSON.stringify(cookieObj);
};

const getCookie = () => {
    const cookie = document.cookie
    let obj = {}

    if (cookie) {
        const splittedCookieObj = cookie.split('=')

        try {
            obj = JSON.parse(splittedCookieObj[1])
        } catch(err) {
            console.error(err);
        }
    }

    return obj
}

export default {
    clearCookieObj,
    clearCookie,
    setCookie,
    getCookie,
}