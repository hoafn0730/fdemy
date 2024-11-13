import httpRequest from '~/utils/httpRequest';

const search = (query, type = 'less', page) => {
    return httpRequest
        .get('search', {
            params: {
                q: query,
                type,
                page,
            },
        })
        .then((res) => res.data);
};

export { search };
