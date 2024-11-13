import httpRequest from '~/utils/httpRequest';

const getLessons = async ({ page, courseId }: { page: number; courseId: number }) => {
    return await httpRequest.get('/lessons', {
        params: {
            page,
            courseId,
        },
    });
};

const createLesson = async (data: any) => {
    return await httpRequest.post('/lessons', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const updateLesson = async (data: any, id: number) => {
    return await httpRequest.put('/lessons/' + id, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const deleteLesson = async (id: number) => {
    return await httpRequest.delete('/lessons/' + id);
};

const lessonService = {
    getLessons,
    createLesson,
    updateLesson,
    deleteLesson,
};

export default lessonService;
