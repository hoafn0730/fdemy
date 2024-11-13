import httpRequest from '~/utils/httpRequest';

const getCouponByCode = async (code) => {
    return await httpRequest.get('/coupons/' + code).then((res) => {
        if (res.code === 1) {
            return;
        }
        return res.data;
    });
};

export { getCouponByCode };
