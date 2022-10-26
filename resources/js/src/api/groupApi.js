import { axiosInstance, bearerConfig } from "./axiosInstance";

const DEFAULT_URL = 'courses';

export const groupApi = {
    getMyGroupInfo: async (courseId) => {
        const url = DEFAULT_URL + '/' + courseId + '/groups/my-group';
        const config = await bearerConfig();
        return axiosInstance.get(url, config);
    },
}
