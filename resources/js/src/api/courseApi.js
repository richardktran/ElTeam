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
    getDetail: async (id) => {
        const url = DEFAULT_URL + '/' + id;
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    getMembers: async (id) => {
        const url = DEFAULT_URL + '/' + id + '/members';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    getCurriculum: async (id) => {
        const url = DEFAULT_URL + '/' + id + '/curriculum';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    create: async (data) => {
        const url = DEFAULT_URL;
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    update: async (id, data) => {
        const url = DEFAULT_URL + '/' + id;
        const config = await bearerConfig();
        return axiosInstance.put(url, data, config);
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
    },
    updateCurriculum: async (id, data) => {
        const url = DEFAULT_URL + '/' + id + '/curriculum';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    randomDivideGroup: async (id, data) => {
        const url = DEFAULT_URL + '/' + id + '/divide-random-groups';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    lockGroup: async (id) => {
        const url = DEFAULT_URL + '/' + id + '/lock-group';
        const config = await bearerConfig();
        return axiosInstance.post(url, {}, config);
    }
}
