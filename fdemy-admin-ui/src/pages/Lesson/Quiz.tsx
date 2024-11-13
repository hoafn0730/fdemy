import { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

type DeleteProps = {
    isShow: boolean;
    data: any;
    onClose: () => void;
};

function Quiz({ isShow, data, onClose }: DeleteProps) {
    const [show, setShow] = useState(false);
    return (
        <>
            <Modal show={isShow} size="xl" onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" type="button" onClick={() => setShow(true)}>
                        +
                    </Button>
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
                            {/* {data?.data.map((item: any, index: any) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <Image className={cx('img')} src={item.image} alt={item.title} />
                                    </td>
                                    <td>{item.createdAt}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>12313</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Quiz;
