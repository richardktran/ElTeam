import { axiosInstance, bearerConfig } from "./axiosInstance";

const DEFAULT_URL = 'courses';

export const courseApi = {
    getAll: async () => {
        const url = DEFAULT_URL;
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    create: async (data) => {
        const url = DEFAULT_URL;
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    }
}
