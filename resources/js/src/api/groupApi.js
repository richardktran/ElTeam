import { axiosInstance, bearerConfig } from "./axiosInstance";

const DEFAULT_URL = 'courses';

export const groupApi = {
    getMyGroupInfo: async (courseId) => {
        const url = DEFAULT_URL + '/' + courseId + '/groups/my-group';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    getGroupOfTask: async (taskId) => {
        const url = 'tasks/' + taskId + '/group';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    getTask: async (taskId) => {
        const url = 'tasks' + '/' + taskId;
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    getTasks: async (groupId) => {
        const url = 'groups' + '/' + groupId + '/tasks';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    getInfo: async (groupId) => {
        const url = 'groups' + '/' + groupId;
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
    updateTaskPosition: async (groupId, data) => {
        const url = 'groups' + '/' + groupId + '/update-task-position';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    updateContentTask: async (taskID, data) => {
        const url = 'tasks' + '/' + taskID;
        const config = await bearerConfig();
        return axiosInstance.put(url, data, config);
    },
    create: async (groupId, data) => {
        const url = 'groups' + '/' + groupId + '/tasks';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    }
}
