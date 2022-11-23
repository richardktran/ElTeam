import axios from 'axios';

export const BASE_DOMAIN = process.env.MIX_APP_URL;
export const API_URL = BASE_DOMAIN + 'api/';

export const bearerConfig = async () => {
    const token = localStorage.getItem('token') ?? "";
    return {
        headers: { Authorization: `Bearer ${token}` }
    }

};

export const axiosInstance = axios.create({
    baseURL: API_URL,
});
