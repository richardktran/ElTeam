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
    }
}
