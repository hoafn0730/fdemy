import httpRequest from '~/utils/httpRequest';

const getBanner = async (page) => {
    return await httpRequest
        .get('/banners', {
            params: {
                page: page,
            },
        })
        .then((res) => res.data);
};

export { getBanner };
