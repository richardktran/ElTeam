import { axiosInstance, bearerConfig } from "./axiosInstance";

const DEFAULT_URL = 'users';

export const userApi = {
    findByEmail: async (email) => {
        const url = DEFAULT_URL + '/get-by-email';
        const params = {
            email: email
        }
        const header = await bearerConfig();
        return axiosInstance.get(url, { params, ...header });
    }
}
