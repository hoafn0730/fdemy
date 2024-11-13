import axios from 'axios';
import axiosRetry from 'axios-retry';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
});

axiosRetry(httpRequest, {
    retries: 3,
    retryCondition: (error) => {
        return error?.response?.status === 400 || error?.response?.status === 405;
    },
    retryDelay: (retryCount, error) => {
        return retryCount * 100;
    },
});

let store: any;
export const injectStore = (_store: any) => {
    store = _store;
};

httpRequest.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const headerToken = store?.getState()?.account?.userInfo?.accessToken ?? '';
        if (headerToken) {
            config.headers.Authorization = `Bearer ${headerToken}`;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
httpRequest.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        // if (error?.response === 401) {
        //     window.location.href = '/login';
        // }

        return Promise.reject(error?.response);
    },
);

export default httpRequest;
