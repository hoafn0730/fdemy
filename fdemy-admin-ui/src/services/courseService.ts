import httpRequest from '~/utils/httpRequest';

const getCourses = async ({ page }: { page?: number }) => {
    return await httpRequest.get('/courses', {
        params: {
            page,
        },
    });
};

const createCourse = async (data: any) => {
    return await httpRequest.post('/courses', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const updateCourse = async (data: any, id: number) => {
    return await httpRequest.put('/courses/' + id, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const deleteCourse = async (id: number) => {
    return await httpRequest.delete('/courses/' + id);
};

const courseService = {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
};

export default courseService;
