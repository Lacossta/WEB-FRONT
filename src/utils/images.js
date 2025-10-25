import {baseURL} from "../config/Config";


export const getImage = (url) => {
    return baseURL + "/public/" + url;
}