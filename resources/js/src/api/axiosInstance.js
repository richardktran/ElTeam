import axios from 'axios';

const BASE_DOMAIN = 'http://127.0.0.1:8000/api/';
const baseURL = BASE_DOMAIN;

export const axiosInstance = axios.create({
    baseURL,
});
