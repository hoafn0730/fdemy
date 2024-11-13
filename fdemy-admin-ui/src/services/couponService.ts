import httpRequest from '~/utils/httpRequest';

const getCouponByCode = async (code: string) => {
    return await httpRequest.get('/coupons/' + code).then((res: any) => {
        if (res.code === 1) {
            return;
        }
        return res.data;
    });
};

export { getCouponByCode };
