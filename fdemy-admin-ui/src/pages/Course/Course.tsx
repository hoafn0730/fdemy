import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Course.module.scss';
import CreateAndUpdate from './CreateAndUpdate';
import Delete from './Delete';
import Pagination from '~/components/Pagination';
import courseService from '~/services/courseService';
import Image from '~/components/Image';
import formatPrice from '~/utils/formatPrice';
import moment from 'moment';

const cx = classnames.bind(styles);

type DataType = {
    data: any[];
    meta: any;
};

export type CourseType = {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    slug: string;
    image?: any;
    icon: string;
    content: string;
    oldPrice: number;
    price: number;
    video: string;
    priority?: string;
};

function Course() {
    const [data, setData] = useState<DataType>();
    const [dataRaw, setDataRaw] = useState<CourseType | undefined>();
    const [show, setShow] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [searchParams] = useSearchParams();
    const [id, setId] = useState<number>(0);

    useEffect(() => {
        if (Number(searchParams.get('page')) > 0 && !(show || isShowDelete)) {
            courseService.getCourses({ page: Number(searchParams.get('page')) }).then((res) => {
                setData(res.data);
            });
        }
    }, [searchParams, show, isShowDelete]);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setDataRaw(undefined);
        setShow(true);
    };

    const handleEdit = (item: any) => {
        setDataRaw(item);
        setShow(true);
    };

    const handleDelete = (itemId: number) => {
        setId(itemId);
        setIsShowDelete(true);
    };

    const handleSave = (data: any, type: string) => {
        if (type === 'create') {
            courseService
                .createCourse(data)
                .then((res: any) => {
                    if (res?.code === 1) {
                        toast.warning(res?.message, {
                            position: 'top-center',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                    }

                    setShow(false);
                })
                .catch((err) => console.log(err));
        } else if (type === 'update') {
            courseService
                .updateCourse(data, data.id)
                .then(() => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleOKDelete = () => {
        courseService
            .deleteCourse(id)
            .then(() => {})
            .catch(() => {
                toast.error('Xoa that bai!', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            });
        setId(0);
        setIsShowDelete(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col xs={12} xl={8} md={4}>
                                <h3 className="font-weight-bold title">Course</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="grid-margin stretch-card">
                        <Card>
                            <Card.Body>
                                <Card.Header className="d-flex justify-content-between bg-light">
                                    <Card.Title>Course Table</Card.Title>
                                    <Button variant="primary" type="button" onClick={handleShow}>
                                        +
                                    </Button>
                                </Card.Header>
                                <Row>
                                    <Col xs={12}>
                                        <Table hover responsive>
                                            <thead>
                                                <tr>
                                                    <th>Quote#</th>
                                                    <th>Title</th>
                                                    <th>Image</th>
                                                    <th>Price</th>
                                                    <th>Category</th>
                                                    <th>Created at</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <Image
                                                                className={cx('img')}
                                                                src={item.image}
                                                                alt={item.title}
                                                            />
                                                        </td>
                                                        <td>{formatPrice(item.price)}</td>
                                                        <td>{item?.category?.title}</td>
                                                        <td>{moment(item?.createdAt).format('MM-DD-YYYY')}</td>
                                                        <td>
                                                            <Button
                                                                variant="warning"
                                                                className="text-light mx-1"
                                                                onClick={() => handleEdit(item)}
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                variant="danger"
                                                                onClick={() => handleDelete(item.id)}
                                                            >
                                                                Xoa
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Pagination className="d-flex justify-content-end" total={data?.meta.count} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <CreateAndUpdate dataRaw={dataRaw} isShow={show} onSave={handleSave} onClose={handleClose} />
                <Delete isShow={isShowDelete} onOk={handleOKDelete} onClose={() => setIsShowDelete(false)} />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                />
            </Container>
        </div>
    );
}

export default Course;
