import httpRequest from '~/utils/httpRequest';

const getTracks = async (course) => {
    return httpRequest.get('/tracks', {
        params: {
            course: course,
        },
    });
};

const getStep = async (uuid) => {
    return httpRequest.get('/steps/' + uuid);
};

const saveUserProcess = (uuid) => {
    return httpRequest.post('/user-process', {
        stepUuid: uuid,
    });
};

export { getTracks, getStep, saveUserProcess };
