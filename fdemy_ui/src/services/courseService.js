import httpRequest from '~/utils/httpRequest';

const getCourses = async () => {
    return await httpRequest.get('/combined-courses').then((res) => res.data);
};

const getCourseBySlug = async (slug) => {
    return await httpRequest.get('/courses/' + slug).then((res) => res.data);
};

const getRegisteredCourses = async () => {
    return await httpRequest.get('/courses/registered').then((res) => res.data);
};

export { getCourses, getCourseBySlug, getRegisteredCourses };
