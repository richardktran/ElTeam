import axios from 'axios';

const BASE_DOMAIN = 'http://127.0.0.1:8000/api/';
const baseURL = BASE_DOMAIN;

export const bearerConfig = async () => {
    const token = localStorage.getItem('token') ?? "";
    return {
        headers: { Authorization: `Bearer ${token}` }
    }

};

export const axiosInstance = axios.create({
    baseURL,
});
