import classnames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import styles from './Checkout.module.scss';
import Card from './Card';
import Heading from '~/components/Heading';
import IndexModule from '~/components/IndexModule';
import Button from '~/components/Button';
import * as courseService from '~/services/courseService';
import formatPrice from '~/utils/formatPrice';
import * as couponService from '~/services/couponService';
import { createInvoice } from '~/services/invoiceService';
import { useSelector } from 'react-redux';

const cx = classnames.bind(styles);

const cardInfo = {
    nameOnCard: 'Trần Đình Hoàn',
    cardNumber: '1234 5678 9012 3193',
    expiryDate: '02/06/2024 17:59:40',
    cvv: '123',
};

function Checkout() {
    const [course, setCourse] = useState();
    const [discount, setDiscount] = useState(0);
    const [data, setData] = useState({ ...cardInfo });

    const { userInfo } = useSelector((state) => state.user);
    const { slug } = useParams();
    const couponInputRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        courseService.getCourseBySlug(slug).then((res) => {
            setCourse(res.course);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applyCouponCode = () => {
        const couponCode = couponInputRef.current.value;
        if (couponCode) {
            couponService
                .getCouponByCode(couponCode)
                .then((res) => {
                    if (res) {
                        setDiscount(course.price * res.discount * 0.01);
                        setData((prev) => ({ ...prev, couponCode: couponCode }));
                        toast.success('Apply coupon code success!');
                    } else {
                        toast.error('Coupon is not exist!');
                        couponInputRef.current.value = '';
                    }
                })
                .catch((err) => console.log(123));
        } else {
            toast.warn('Please enter coupon code!');
        }
    };

    const handleCheckout = () => {
        const invoiceInfo = { ...data, courseId: course.id, userId: userInfo.id, total: +course?.price - discount };
        createInvoice(invoiceInfo).then((res) => {
            const resolveWithSomeData = new Promise((resolve) => {
                toast.success('Thanh toán thành công! Yêu cầu đợi hệ thống xác nhận trong vòng 24h');
                setTimeout(() => {
                    resolve();
                }, 3000);
            });

            toast.promise(resolveWithSomeData, {
                success: {
                    render() {
                        navigate('/');
                        return;
                    },
                },
            });
        });
    };

    const handleCheck = (e, info) => {
        setData((prev) => ({ ...prev, ...info }));
    };

    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <Heading className={cx('header')} title="Checkout" />
                <div className={cx('body')}>
                    <IndexModule className={cx('row')}>
                        <IndexModule className={cx('col', 'l-7')}>
                            <h3 className={cx('header')}>Saved card:</h3>
                            <div className={cx('checkoutOption')}>
                                <Card
                                    isChecked={true}
                                    info={cardInfo}
                                    title={cardInfo.cardNumber}
                                    name={'card'}
                                    onChange={handleCheck}
                                />
                                <Card
                                    isChecked={false}
                                    title={'**** **** **** 3193'}
                                    name={'card'}
                                    onChange={handleCheck}
                                />
                            </div>
                            <h3 className={cx('header')}>Thêm thông tin thẻ:</h3>

                            <div className={cx('group')}>
                                <label className={cx('label')}>Name on card</label>
                                <input className={cx('control')} type="text" placeholder="Name on card" />
                            </div>
                            <div className={cx('group')}>
                                <label className={cx('label')}>Card number</label>
                                <input className={cx('control')} type="text" placeholder="1234 5678 9012 3456" />
                            </div>
                            <div className={cx('stripe-container')}>
                                <div className={cx('group')}>
                                    <label className={cx('label')}>Expiry date </label>
                                    <input className={cx('control')} type="text" placeholder="MM/YY" />
                                </div>
                                <div className={cx('group')}>
                                    <label className={cx('label')}>CVV </label>
                                    <input className={cx('control')} type="text" placeholder="CVC" />
                                </div>
                            </div>

                            <Button primary rounded>
                                Thêm thẻ
                            </Button>
                        </IndexModule>
                        <IndexModule className={cx('col', 'l-5')}>
                            <div className={cx('summary')}>
                                <h2 className={cx('heading')}>Summary</h2>
                                <span className={cx('label')}>Course Name:</span>
                                <span className={cx('title')}>{course?.title}</span>
                                <div className={cx('coupon')}>
                                    <input
                                        ref={couponInputRef}
                                        className={cx('control', 'couponInput')}
                                        type="text"
                                        placeholder="Enter coupon"
                                    />
                                    <Button outline className={cx('applyBtn')} onClick={applyCouponCode}>
                                        Apply
                                    </Button>
                                </div>
                                <div className={cx('price')}>
                                    <div className={cx('originalPrice')}>
                                        <span>Original Price:</span>
                                        <span>{formatPrice(course?.price)}</span>
                                    </div>
                                    <div className={cx('originalPrice')}>
                                        <span>Discount:</span>
                                        <span>{'- ' + formatPrice(discount)}</span>
                                    </div>
                                    <div className={cx('divider')}></div>
                                    <div className={cx('totalPrice')}>
                                        <span>Original Price:</span>
                                        <span>{course?.price && formatPrice(+course?.price - discount)}</span>
                                    </div>
                                </div>
                                <Button primary className={cx('checkoutBtn')} onClick={handleCheckout}>
                                    Hoàn tất thanh toán
                                </Button>
                            </div>
                        </IndexModule>
                    </IndexModule>
                </div>
                <ToastContainer />
            </IndexModule>
        </div>
    );
}

export default Checkout;
