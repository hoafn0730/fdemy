import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './User.module.scss';
import CreateAndUpdate from './CreateAndUpdate';
import Delete from './Delete';
import Pagination from '~/components/Pagination';
import userService from '~/services/userService';
import moment from 'moment';

const cx = classnames.bind(styles);

type DataType = {
    data: any[];
    meta: any;
};

export type UserType = {
    id: number;
    username: string;
    email: string;
    password: string;
    fullName: string;
    role: string;
};

function User() {
    const [data, setData] = useState<DataType>();
    const [dataRaw, setDataRaw] = useState<UserType | undefined>();
    const [show, setShow] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [searchParams] = useSearchParams();
    const [id, setId] = useState<number>(0);

    useEffect(() => {
        if (Number(searchParams.get('page')) > 0 && !(show || isShowDelete)) {
            userService.getUsers({ page: Number(searchParams.get('page')) }).then((res) => {
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
            userService
                .createUser(data)
                .then((res) => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        } else if (type === 'update') {
            userService
                .updateUser(data, data.id)
                .then((res) => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleOKDelete = () => {
        userService
            .deleteUser(id)
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

    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col xs={12} xl={8} md={4}>
                                <h3 className="font-weight-bold title">User</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="grid-margin stretch-card">
                        <Card>
                            <Card.Body>
                                <Card.Header className="d-flex justify-content-between bg-light">
                                    <Card.Title>User Table</Card.Title>
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
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Full Name</th>
                                                    <th>Role</th>
                                                    <th>Created at</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.username}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.fullName}</td>
                                                        <td>{item.role}</td>
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

export default User;
