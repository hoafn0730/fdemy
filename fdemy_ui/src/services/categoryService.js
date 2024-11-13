import httpRequest from '~/utils/httpRequest';

const getCategories = async () => {
    return await httpRequest.get('/categories').then((res) => res.data);
};

export { getCategories };
