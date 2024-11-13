import httpRequest from '~/utils/httpRequest';

const getRegisters = async ({ page }: { page?: number }) => {
    return await httpRequest.get('/registers', {
        params: {
            page,
        },
    });
};

const createRegister = async (data: any) => {
    return await httpRequest.post('/registers', data);
};

const updateRegister = async (data: any, id: number) => {
    return await httpRequest.put('/registers/' + id, data);
};

const deleteRegister = async (id: number) => {
    return await httpRequest.delete('/registers/' + id);
};

const registerService = {
    getRegisters,
    createRegister,
    updateRegister,
    deleteRegister,
};

export default registerService;
