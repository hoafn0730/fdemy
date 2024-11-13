import httpRequest from '~/utils/httpRequest';

const getCategories = async ({ page }: { page?: number }) => {
    return await httpRequest.get('/categories', {
        params: {
            page,
        },
    });
};

const createCategory = async (data: any) => {
    return await httpRequest.post('/categories', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const updateCategory = async (data: any, id: number) => {
    return await httpRequest.put('/categories/' + id, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const deleteCategory = async (id: number) => {
    return await httpRequest.delete('/categories/' + id);
};

const categoryService = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
};

export default categoryService;
