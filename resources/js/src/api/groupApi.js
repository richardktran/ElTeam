import { axiosInstance, bearerConfig } from "./axiosInstance";

const DEFAULT_URL = 'courses';

export const groupApi = {
    getMyGroupInfo: async (courseId) => {
        const url = DEFAULT_URL + '/' + courseId + '/groups/my-group';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },

    getTasks: async (groupId) => {
        const url = 'groups' + '/' + groupId + '/tasks';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    updateTaskPosition: async (groupId, data) => {
        const url = 'groups' + '/' + groupId + '/update-task-position';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    create: async (groupId, data) => {
        const url = 'groups' + '/' + groupId + '/tasks';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    }
}
