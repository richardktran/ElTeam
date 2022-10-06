import { axiosInstance, bearerConfig } from "./axiosInstance";

const DEFAULT_URL = 'courses';

export const courseApi = {
    getOwnCourses: async () => {
        const url = DEFAULT_URL + '/own';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    getLearningCourses: async () => {
        const url = DEFAULT_URL;
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    create: async (data) => {
        const url = DEFAULT_URL;
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    invite: async (id, data) => {
        const url = DEFAULT_URL + '/' + id + '/invite';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    accept: async (id) => {
        const url = DEFAULT_URL + '/' + id + '/accept';
        const config = await bearerConfig();
        return axiosInstance.post(url, {}, config);
    },
    decline: async (id) => {
        const url = DEFAULT_URL + '/' + id + '/decline';
        const config = await bearerConfig();
        return axiosInstance.post(url, {}, config);
    }
}
