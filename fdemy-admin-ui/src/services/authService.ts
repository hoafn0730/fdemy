import httpRequest from '~/utils/httpRequest';

const login = async (data: any) => {
    return httpRequest.post('/auth/login', {
        ...data,
    });
};

const getCurrentUser = async () => {
    return await httpRequest.get('/auth/current-user');
};

export { login, getCurrentUser };
