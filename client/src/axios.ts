import axios from "axios";
import { API_1_URL_BASE,API_2_URL_BASE,API_3_URL_BASE,API_4_URL_BASE } from "./constants";
console.log(API_1_URL_BASE)
export const api_1 = axios.create({
    baseURL:API_1_URL_BASE,
})
export const api_2 = axios.create({
    baseURL:API_2_URL_BASE,
})
export const api_3 = axios.create({
    baseURL:API_3_URL_BASE,
})
export const api_4 = axios.create({
    baseURL:API_4_URL_BASE,
})