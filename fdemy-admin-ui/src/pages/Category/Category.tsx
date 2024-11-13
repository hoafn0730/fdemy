import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import styles from './Category.module.scss';
import CreateAndUpdate from './CreateAndUpdate';
import Delete from './Delete';
import Pagination from '~/components/Pagination';
import Image from '~/components/Image';
import categoryService from '~/services/categoryService';
import moment from 'moment';

const cx = classnames.bind(styles);

type DataType = {
    data: any[];
    meta: any;
};

export type CategoryType = {
    id: number;
    title: string;
    description: string;
    slug: string;
    image?: any | null;
    content: string;
};

function Category() {
    const [data, setData] = useState<DataType>();
    const [dataRaw, setDataRaw] = useState<CategoryType | undefined>();
    const [show, setShow] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [searchParams] = useSearchParams();
    const [id, setId] = useState<number>(0);

    useEffect(() => {
        if (Number(searchParams.get('page')) > 0 && !(show || isShowDelete)) {
            categoryService.getCategories({ page: Number(searchParams.get('page')) }).then((res) => {
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
            console.log(data);

            categoryService
                .createCategory(data)
                .then(() => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        } else if (type === 'update') {
            categoryService
                .updateCategory(data, data.id)
                .then(() => {
                    setShow(false);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleOKDelete = () => {
        categoryService
            .deleteCategory(id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
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
                                <h3 className="font-weight-bold title">Category</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="grid-margin stretch-card">
                        <Card>
                            <Card.Body>
                                <Card.Header className="d-flex justify-content-between bg-light">
                                    <Card.Title>Category Table</Card.Title>
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
            </Container>
        </div>
    );
}

export default Category;
