const formatPrice = (str: any = 0) => {
    return str.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
    });
};

export default formatPrice;
