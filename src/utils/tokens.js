import Cookies from 'universal-cookie';
import {jwtDecode} from "jwt-decode";


export const getTokens = () => {
    const cookies = new Cookies();
    if(cookies.get("access_token") === undefined) return {};
    return {
        access_token: cookies.get("access_token"),
        refresh_token: cookies.get("refresh_token"),
    }
}

export const setTokens = (at, rt) => {
    const cookies = new Cookies();
    cookies.set('access_token', at, { path: '/' });
    cookies.set('refresh_token', rt, { path: '/' });
}

export const decodeToken = () => {
    const token = getTokens().access_token;
    if(token) {
        return jwtDecode(token)

    } else {
        return null;
    }
}