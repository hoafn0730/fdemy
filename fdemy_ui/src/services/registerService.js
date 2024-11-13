import httpRequest from '~/utils/httpRequest';

const registerCourse = async (data) => {
    return await httpRequest.post('/registers', data);
};

export { registerCourse };
