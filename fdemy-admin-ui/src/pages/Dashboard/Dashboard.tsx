import classNames from 'classnames/bind';
import { Card, Col, Row } from 'react-bootstrap';

import styles from './Dashboard.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { useEffect, useState } from 'react';
import { analysis } from '~/services/analyticService';
import formatPrice from '~/utils/formatPrice';

const cx = classNames.bind(styles);

function Dashboard() {
    const [data, setData] = useState<any>();
    const [featuredCourses, setFeaturedCourses] = useState<any[]>([]);

    useEffect(() => {
        analysis().then((res) => {
            setData(res);
            setFeaturedCourses(res.featuredCourses);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col md={12} className={cx('grid-margin')}>
                    <Row>
                        <Col xs={12} xl={8} className="mb-4 mb-xl-0">
                            <h3 className={cx('font-weight-bold', 'title')}>Welcome Hoafn0730</h3>
                            <h6 className={cx('font-weight-normal', 'mb-0', 'subtitle')}>
                                All systems are running smoothly!
                            </h6>
                        </Col>
                        <Col xs={12} xl={4}>
                            <div className="justify-content-end d-flex">
                                <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                    <button
                                        className={cx('btn btn-sm btn-light bg-white', 'dropdown-toggle')}
                                        type="button"
                                        id="dropdownMenuDate2"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                    >
                                        <i className="mdi mdi-calendar" />
                                        Today (10 Jan 2021)
                                    </button>
                                    <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="dropdownMenuDate2"
                                    >
                                        <a className="dropdown-item" href="#">
                                            January - March
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            March - June
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            June - August
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            August - November
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={6} className={cx('grid-margin', 'stretch-card')}>
                    <Card className={cx('tale-bg')}>
                        <div className={cx('card-people', 'pt-5', 'mt-auto')}>
                            <Image src={images.people} alt={'people'} />
                            <div className={cx('weather-info')}>
                                <div className="d-flex align-items-center">
                                    <h2 className="mb-0 font-weight-normal">
                                        <i className="icon-sun mr-2" />
                                        31<sup>C</sup>
                                    </h2>
                                    <div className="ml-3">
                                        <h4 className={cx('location', 'font-weight-normal')}>Hưng Yên</h4>
                                        <h6 className="font-weight-normal">Việt Nam</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={6} className={cx('grid-margin', 'transparent')}>
                    <Row>
                        <Col md={6} className={cx('mb-4', 'stretch-card', 'transparent')}>
                            <Card className={cx('card-tale')}>
                                <Card.Body className={cx('py-5', 'px-4')}>
                                    <p className="mb-4">Số học viên</p>
                                    <p className="fs-30 mb-2">{data?.numberUser} học viên</p>
                                    <p>10.00% (30 days)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className={cx('mb-4', 'stretch-card', 'transparent')}>
                            <Card className={cx('card-dark-blue')}>
                                <Card.Body className={cx('py-5', 'px-4')}>
                                    <p className="mb-4">Số khóa học được đăng ký</p>
                                    <p className="fs-30 mb-2">{data?.numberCourseRegistered}</p>
                                    <p>22.00% (30 days)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className={cx('mb-4', 'mb-lg-0', 'stretch-card', 'transparent')}>
                            <Card className={cx('card-light-blue')}>
                                <Card.Body className={cx('py-5', 'px-4')}>
                                    <p className="mb-4">Doanh thu trong tháng {new Date().getMonth() + 1}</p>
                                    <p className="fs-30 mb-2">{formatPrice(data?.revenue)}</p>
                                    <p>2.00% (30 days)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <Col md={6} className={cx('stretch-card', 'transparent')}>
                            <Card className={cx('card-light-danger')}>
                                <Card.Body className={cx('py-5', 'px-4')}>
                                    <p className="mb-4">Number of Clients</p>
                                    <p className="fs-30 mb-2">47033</p>
                                    <p>0.22% (30 days)</p>
                                </Card.Body>
                            </Card>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={6} className={cx("grid-margin','stretch-card")}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Order Details</Card.Title>
                            <p className="font-weight-500">
                                The total number of sessions within the date range. It is the period time a user is
                                actively engaged with your website, page or app, etc
                            </p>
                            <div className="d-flex flex-wrap mb-5">
                                <div className="mr-5 mt-3">
                                    <p className="text-muted">Order value</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
                                </div>
                                <div className="mr-5 mt-3">
                                    <p className="text-muted">Orders</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
                                </div>
                                <div className="mr-5 mt-3">
                                    <p className="text-muted">Users</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">71.56%</h3>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted">Downloads</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">34040</h3>
                                </div>
                            </div>
                            <canvas id="order-chart" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="grid-margin stretch-card">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Card.Title>Khoá học phổ biến</Card.Title>
                            </div>
                            <ul>
                                {featuredCourses.map((course: any, index: number) => (
                                    <li key={index}>
                                        <img
                                            style={{
                                                width: '100px',
                                                marginRight: 10,
                                                marginBottom: 6,
                                                borderRadius: 10,
                                            }}
                                            src={course.image}
                                            alt={course.title}
                                        />
                                        <span>{course.title}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* <div id="sales-legend" className="chartjs-legend mt-4 mb-2" />
                            <canvas id="sales-chart" /> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
