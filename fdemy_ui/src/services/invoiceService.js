const { default: httpRequest } = require('~/utils/httpRequest');

const createInvoice = async (data) => {
    return await httpRequest.post('/invoices', data);
};

export { createInvoice };
