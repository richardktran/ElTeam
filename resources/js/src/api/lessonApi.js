import { axiosInstance, bearerConfig } from "./axiosInstance";

const TOPIC_URL = 'topics';
const ACTIVITY_URL = 'activities';

export const lessonApi = {
    getTopics: async (data) => {
        const url = TOPIC_URL + '/?course_id=' + data.course_id;
        const config = await bearerConfig();
        return axiosInstance.get(url, config, data);
    },
}
