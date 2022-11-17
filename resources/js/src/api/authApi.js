import { axiosInstance, bearerConfig } from './axiosInstance';

const authApi = {
    login: (user) => {
        return axiosInstance.post('/login', {
            email: user.email,
            password: user.password,
        });
    },
    register: (user) => {
        return axiosInstance.post('/register', {
            name: user.name,
            email: user.email,
            password: user.password,
        });
    },
    logout: async () => {
        const config = await bearerConfig();
        return axiosInstance.post('/logout', {}, config);
    },
    googleUrl: () => {
        return axiosInstance.get('/auth/google/url');
    },
    googleCallback: (searchParam) => {
        return axiosInstance.get(`/auth/google/callback${searchParam}`);
    },
    me: async () => {
        const config = await bearerConfig();
        return axiosInstance.get('/me', config);
    }
};

export default authApi;
