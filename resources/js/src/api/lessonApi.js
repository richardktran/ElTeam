import { axiosInstance, bearerConfig } from "./axiosInstance";

const TOPIC_URL = 'topics';
const ACTIVITY_URL = 'activities';

export const lessonApi = {
    getTopics: async (data) => {
        const url = TOPIC_URL + '/?course_id=' + data.course_id;
        const config = await bearerConfig();
        return axiosInstance.get(url, config, data);
    },
    updateTopicsPosition: async (data) => {
        const url = TOPIC_URL + '/update-position';
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    create: async (data) => {
        const url = TOPIC_URL;
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    update: async (id, data) => {
        const url = TOPIC_URL + '/' + id;
        const config = await bearerConfig();
        return axiosInstance.put(url, data, config);
    },
    delete: async (id) => {
        const url = TOPIC_URL + '/' + id;
        const config = await bearerConfig();
        return axiosInstance.delete(url, config);
    },
    updateActivity: async (id, data) => {
        const url = ACTIVITY_URL + '/' + id;
        const config = await bearerConfig();
        return axiosInstance.put(url, data, config);
    },
    toggleLockTopic: async (topicId) => {
        const url = TOPIC_URL + '/' + topicId + '/toggle-lock';
        const config = await bearerConfig();
        return axiosInstance.post(url, {}, config);
    },
    toggleLockActivity: async (activityId) => {
        const url = ACTIVITY_URL + '/' + activityId + '/toggle-lock';
        const config = await bearerConfig();
        return axiosInstance.post(url, {}, config);
    },
    updateActivities: async (data) => {
        const url = ACTIVITY_URL + '/';
        const config = await bearerConfig();
        return axiosInstance.put(url, data, config);
    },
    createActivity: async (data) => {
        const url = ACTIVITY_URL;
        const config = await bearerConfig();
        return axiosInstance.post(url, data, config);
    },
    deleteActivity: async (id) => {
        const url = ACTIVITY_URL + '/' + id;
        const config = await bearerConfig();
        return axiosInstance.delete(url, config);
    }
}
