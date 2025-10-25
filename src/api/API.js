import axios from "axios";
import {getTokens, setTokens} from "../utils/tokens";
import {baseURL} from "../config/Config";



const $host = axios.create({
    baseURL,
    timeout: 30000
})

export const $authHost = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer ' + getTokens().access_token,
    },
})

$authHost.interceptors.response.use(response => response, error => {
    const { response, config } = error

    if (response.status !== 403) {
        return Promise.reject(error)
    }

    // Use a 'clean' instance of axios without the interceptor to refresh the token. No more infinite refresh loop.
    return axios.get(`${baseURL}/auth/refresh`, {
        headers: {
            Authorization: 'Bearer ' + getTokens().refresh_token ,
        },
    })
        .then(async ({data}) => {
            setTokens(data.access_token, getTokens().refresh_token)
            config.headers['Authorization'] = 'Bearer ' + data.access_token;
            $authHost.defaults.headers['Authorization'] = 'Bearer ' + data.access_token;
            return $authHost.request(config)
        })
        .catch(() => {
            return Promise.reject(error)
        })
})

export const login = async (data) => {
    try {
        return await $host.post("/auth/login", data)
    } catch (err) {
        return err.response;
    }
}

export const logout = async (data) => {
    try {
        return await $host.post("/auth/logout")
    } catch (err) {
        return err.response;
    }
}

export const check = async (data) => {
    try {
        return await $authHost.get("/auth/check")
    } catch (err) {
        return err.response;
    }
}

export const register = async (data) => {
    try {
        return await $host.post("/auth/reg", data)
    } catch (err) {
        return err.response;
    }
}

export const changePassword = async (data) => {
    try {
        return await $authHost.post("/auth/changepassword", data)
    } catch (err) {
        return err.response;
    }
}

export const fetch = async (url) => {
    try {
        return await $host.get(url)
    } catch(e) {
        return e.response;
    }
}

export const authFetch = async (url) => {
    try {
        return await $authHost.get(url)
    } catch(e) {
        return e.response;
    }
}

export const updateUserInfo = async (data) => {
    try {
        return await $authHost.post("/user/info", data)
    } catch (err) {
        return err.response;
    }
}

export const updatePaymentInfo = async (data) => {
    try {
        return await $authHost.post("/user/payment", data)
    } catch (err) {
        return err.response;
    }
}

export const addCourse = async (data) => {
    try {
        return await $authHost.post("/course/create", data)
    } catch (err) {
        return err.response;
    }
}

export const removeCourse = async (data) => {
    try {
        return await $authHost.post("/course/remove", data)
    } catch (err) {
        return err.response;
    }
}

export const buyCourse = async (data) => {
    try {
        return await $authHost.post("/user/buycourse", data)
    } catch (err) {
        return err.response;
    }
}

export const unBuyCourse = async (data) => {
    try {
        return await $authHost.post("/user/unBuyCourse", data)
    } catch (err) {
        return err.response;
    }
}
