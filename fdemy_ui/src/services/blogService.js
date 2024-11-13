import httpRequest from '~/utils/httpRequest';

const getBlogs = () => {
    return httpRequest.get('/blogs');
};

const getBlogBySlug = (slug) => {
    return httpRequest.get('/blogs/' + slug);
};

const createPost = (data) => {
    return httpRequest.post('/blogs', data);
};

export { getBlogs, getBlogBySlug, createPost };
