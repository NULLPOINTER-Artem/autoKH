const cookieObj = {
    locale: '',
};

const clearCookie = () => {
    Object.keys(cookieObj).forEach(key => {
        cookieObj[key] = ''
    });

    document.cookie = "cookieObj=" + JSON.stringify(cookieObj);
};

const setCookie = (key, value) => {
    for (let [key, value] of Object.entries(getCookie() ?? {})) {
        cookieObj[key] = value;
    }

    cookieObj[key] = value;

    document.cookie = "cookieObj=" + JSON.stringify(cookieObj);
};

const getCookie = () => {
    const cookie = document.cookie

    if (cookie) {
        const splittedCookieObj = cookie.split('=')

        let obj = {}

        try {
            obj = JSON.parse(splittedCookieObj[1])
        } catch(err) {
            console.error(err);
        }

        return obj
    }
}

export default {
    clearCookie,
    setCookie,
    getCookie,
}