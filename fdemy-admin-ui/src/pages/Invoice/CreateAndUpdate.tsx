import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { InvoiceType } from './Invoice';
import courseService from '~/services/courseService';
import userService from '~/services/userService';

// import MdEditor from '~/components/MdEditor';

type CreateAndUpdateProps = {
    dataRaw: InvoiceType | undefined;
    isShow: boolean;
    onSave: (data: any, type: string) => void;
    onClose: () => void;
};

function CreateAndUpdate({ dataRaw, isShow, onSave, onClose }: CreateAndUpdateProps) {
    const [validated, setValidated] = useState(false);
    const formRef = useRef<any>();
    const [courses, setCourses] = useState([]);
    const [users, setUsers] = useState([]);

    const [data, setData] = useState<InvoiceType>({
        id: dataRaw?.id ?? 0,
        courseId: dataRaw?.courseId ?? 0,
        userId: dataRaw?.userId ?? 0,
        total: 0,
        status: dataRaw?.status ?? '',
    });

    useEffect(() => {
        setData({
            id: dataRaw?.id ?? 0,
            courseId: dataRaw?.courseId ?? 0,
            userId: dataRaw?.userId ?? 0,
            status: dataRaw?.status ?? '',
        });
    }, [dataRaw]);

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;

        if (target.name === 'courseId') {
            setData((prev) => ({
                ...prev,
                total: courses.find((c) => c?.id === +target.value)?.price ?? 0,
            }));
        }

        setData((prev) => ({ ...prev, [target.name as string]: target.value }));
    };

    const handleSave = (e: SyntheticEvent) => {
        e.preventDefault();

        if (formRef.current.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            if (dataRaw) {
                onSave(data, 'update');
                setData({
                    id: 0,
                    courseId: 0,
                    userId: 0,
                });
                setValidated(false);
            } else {
                onSave(data, 'create');
                setData({
                    id: 0,
                    courseId: 0,
                    userId: 0,
                });
                setValidated(false);
            }
        }
    };

    useEffect(() => {
        courseService.getCourses({}).then((res) => {
            setCourses(res.data);
        });
        userService.getUsers({}).then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <Modal show={isShow} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} ref={formRef}>
                    <Form.Group className="mb-3">
                        <Form.Label>Course:</Form.Label>
                        <Form.Select value={data.courseId} name="courseId" size="lg" onChange={handleChange}>
                            <option disabled value={0}>
                                -- Chọn khoá học --
                            </option>
                            {courses.map((course: any) => (
                                <option key={course.id} value={course?.id}>
                                    {course.title}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User:</Form.Label>
                        <Form.Select value={data.userId} name="userId" size="lg" onChange={handleChange}>
                            <option disabled value={0}>
                                -- Choose a user --
                            </option>
                            {users.map((user: any) => (
                                <option key={user.id} value={user?.id}>
                                    {user.username}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status:</Form.Label>
                        <Form.Select value={data.status} name="status" size="lg" onChange={handleChange}>
                            <option disabled value={''}>
                                -- Choose status --
                            </option>
                            <option value={'pending'}>Pending</option>
                            <option value={'success'}>Success</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button type="submit" variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateAndUpdate;
