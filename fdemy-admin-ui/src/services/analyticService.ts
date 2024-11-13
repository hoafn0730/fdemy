import httpRequest from '~/utils/httpRequest';

const analysis = async () => {
    return await httpRequest.get('/analysis').then((res: any) => res.data);
};

export { analysis };
