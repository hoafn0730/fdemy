import axios from 'axios';
import httpRequest from '~/utils/httpRequest';

const login = async (data) => {
    return httpRequest.post('/auth/login', {
        ...data,
    });
};

const logout = async () => {
    return axios.get(process.env.REACT_APP_SSO_BACKEND_URL + '/api/v1/auth/logout', { withCredentials: true });
};

const getCurrentUser = async () => {
    const res = await httpRequest.get('/auth/current-user');
    return res;
};

const refreshToken = async () => {
    const res = await axios.post(
        process.env.REACT_APP_SSO_BACKEND_URL + '/api/v1/auth/refresh-token',
        {},
        { withCredentials: true },
    );
    return res.data;
};

const updateProfile = async (data) => {
    return httpRequest.patch('/auth/update-profile', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default { login, logout, getCurrentUser, refreshToken, updateProfile };
