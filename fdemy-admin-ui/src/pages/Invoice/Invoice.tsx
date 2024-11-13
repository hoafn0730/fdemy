import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

import styles from './Invoice.module.scss';
import CreateAndUpdate from './CreateAndUpdate';
import Delete from './Delete';
import Pagination from '~/components/Pagination';
import invoiceService from '~/services/invoiceService';
import formatPrice from '~/utils/formatPrice';
import Table from '~/components/Table';

const cx = classnames.bind(styles);

type DataType = {
    data: any[];
    meta: any;
};

export type InvoiceType = {
    id: number;
    userId: number;
    courseId: number;
    total?: number;
    status?: string;
};

function Invoice() {
    const [data, setData] = useState<DataType>();
    const [dataRaw, setDataRaw] = useState<InvoiceType | undefined>();
    const [show, setShow] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [searchParams] = useSearchParams();
    const [id, setId] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (Number(searchParams.get('page')) > 0 && !(show || isShowDelete)) {
            invoiceService.getInvoices({ page: Number(searchParams.get('page')) }).then((res) => {
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
            invoiceService
                .createInvoice(data)
                .then((res) => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        } else if (type === 'update') {
            invoiceService
                .updateInvoice(data, data.id)
                .then((res) => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleOKDelete = () => {
        invoiceService
            .deleteInvoice(id)
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

    const columns = [
        {
            title: 'Course',
            key: { model: 'course', field: 'title' },
        },
        {
            title: 'User',
            key: { model: 'user', field: 'username' },
        },
        {
            title: 'Total',
            key: 'total',
            render: (record: any) => {
                return formatPrice(record?.total);
            },
        },
        {
            title: 'Status',
            key: 'status',
        },
        {
            title: 'Created at',
            key: 'createdAt',
            render: (record: any) => {
                return moment(record?.createdAt).format('MM-DD-YYYY');
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (record: any) => {
                return (
                    <>
                        <Button variant="warning" className="text-light" onClick={() => handleEdit(record)}>
                            Edit
                        </Button>
                        <Button variant="danger" className="mx-1" onClick={() => handleDelete(record.id)}>
                            Xoa
                        </Button>
                        <Button variant="info" className="text-light" onClick={() => navigate('/receipt/' + record.id)}>
                            Hoa don
                        </Button>
                    </>
                );
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col xs={12} xl={8} md={4}>
                                <h3 className="font-weight-bold title">Invoice</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="grid-margin stretch-card">
                        <Card>
                            <Card.Body>
                                <Card.Header className="d-flex justify-content-between bg-light">
                                    <Card.Title>Invoice Table</Card.Title>
                                    <Button variant="primary" type="button" onClick={handleShow}>
                                        +
                                    </Button>
                                </Card.Header>
                                <Row>
                                    <Col xs={12}>
                                        <Table columns={columns} dataSource={data?.data} />
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

export default Invoice;
