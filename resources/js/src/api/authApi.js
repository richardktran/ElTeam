import { axiosInstance, bearerConfig } from './axiosInstance';

const authApi = {
    login: (user) => {
        return axiosInstance.post('/login', {
            email: user.email,
            password: user.password,
        });
    },
    logout: async () => {
        const config = await bearerConfig();
        return axiosInstance.post('/logout', {}, config);
    },
    me: async () => {
        const config = await bearerConfig();
        return axiosInstance.get('/me', config);
    }
};

export default authApi;
