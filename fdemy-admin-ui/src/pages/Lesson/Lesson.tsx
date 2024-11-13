import classnames from 'classnames/bind';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Lesson.module.scss';
import CreateAndUpdate from './CreateAndUpdate';
import Delete from './Delete';
import Pagination from '~/components/Pagination';
import Image from '~/components/Image';
import lessonService from '~/services/lessonService';
import courseService from '~/services/courseService';
import Quiz from './Quiz';
import moment from 'moment';

const cx = classnames.bind(styles);

type DataType = {
    data: any[];
    meta: any;
};

export type LessonType = {
    id: number;
    courseId: number;
    title: string;
    description: string;
    image: string;
    content: string;
    duration: number;
    videoType: string;
    video: string;
};

function Lesson() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState<DataType>();
    const [dataRaw, setDataRaw] = useState<LessonType | undefined>();
    const [show, setShow] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [id, setId] = useState<number>(0);
    const [options, setOptions] = useState([]);
    const [course, setCourse] = useState(searchParams.get('course') || '');

    useEffect(() => {
        if (Number(searchParams.get('page')) > 0 && options.length > 0 && !(show || isShowDelete)) {
            if (!searchParams.has('course')) {
                setCourse(options[0]);
                setSearchParams((params) => {
                    params.set('course', options[0].id + '');
                    return params;
                });
            }

            lessonService
                .getLessons({
                    page: Number(searchParams.get('page')),
                    courseId: Number(searchParams.get('course')) || +options[0]?.id,
                })
                .then((res) => {
                    setData(res.data);
                });
        }
    }, [searchParams, options, show, isShowDelete]);

    useEffect(() => {
        courseService.getCourses({}).then((res) => {
            setOptions(res.data);
        });
    }, []);

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

    const handleShowQuiz = (itemId: number) => {
        setId(itemId);
        setShowQuiz(true);
    };

    const handleSave = (data: any, type: string) => {
        console.log('🚀 ~ handleSave ~ data:', data);
        if (type === 'create') {
            lessonService
                .createLesson(data)
                .then((res) => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        } else if (type === 'update') {
            lessonService
                .updateLesson(data, data.id)
                .then((res) => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleOKDelete = () => {
        lessonService
            .deleteLesson(id)
            .then((res) => {})
            .catch((err) => {
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

    const handleChangeCourse = (e: SyntheticEvent) => {
        const target = e.target as HTMLSelectElement;

        setCourse(target.value);
        setSearchParams((params) => {
            params.set('course', target.value + '');
            return params;
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col xs={12} xl={8} md={4}>
                                <h3 className="font-weight-bold title">Lesson</h3>
                            </Col>
                            <Col xs={5} className={cx('mb-3')}>
                                <Form.Group className="mb-3">
                                    <Form.Select value={course} size="lg" onChange={handleChangeCourse}>
                                        <option disabled value={''}>
                                            -- Choose a course --
                                        </option>
                                        {options.map((option: any) => (
                                            <option key={option.id} value={option?.id}>
                                                {option.title}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="grid-margin stretch-card">
                        <Card>
                            <Card.Body>
                                <Card.Header className="d-flex justify-content-between bg-light">
                                    <Card.Title>Lesson Table</Card.Title>
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
                                                                className="text-light mx-1"
                                                                onClick={() => handleDelete(item.id)}
                                                            >
                                                                Xoa
                                                            </Button>
                                                            {/* <Button
                                                                variant="info"
                                                                className="text-light mx-1"
                                                                onClick={() => handleShowQuiz(item.id)}
                                                            >
                                                                Show Quiz
                                                            </Button> */}
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
                <Quiz isShow={showQuiz} data={'124134'} onClose={() => setShowQuiz(false)} />
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

export default Lesson;
