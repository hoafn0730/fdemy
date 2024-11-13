import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { CategoryType } from './Category';
import MdEditor from '~/components/MdEditor';

type CreateAndUpdateProps = {
    dataRaw: CategoryType | undefined;
    isShow: boolean;
    onSave: (data: any, type: string) => void;
    onClose: () => void;
};

function CreateAndUpdate({ dataRaw, isShow, onSave, onClose }: CreateAndUpdateProps) {
    const [validated, setValidated] = useState(false);
    const formRef = useRef<any>();

    const [data, setData] = useState<CategoryType>({
        id: dataRaw?.id ?? 0,
        title: dataRaw?.title ?? '',
        description: dataRaw?.description ?? '',
        slug: dataRaw?.slug ?? '',
        image: dataRaw?.image ?? '',
        content: dataRaw?.content ?? '',
    });

    useEffect(() => {
        setData({
            id: dataRaw?.id ?? 0,
            title: dataRaw?.title ?? '',
            description: dataRaw?.description ?? '',
            slug: dataRaw?.slug ?? '',
            image: dataRaw?.image ?? '',
            content: dataRaw?.content ?? '',
        });
    }, [dataRaw]);

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;

        setData((prev) => ({ ...prev, [target.name as string]: target.value }));
    };

    const handleUploadImage = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        const files: any = target?.files;

        setData((prev) => ({ ...prev, image: files[0] }));
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
                    title: '',
                    description: '',
                    slug: '',
                    image: '',
                    content: '',
                });
                setValidated(false);
            } else {
                onSave(data, 'create');
                setData({
                    id: 0,
                    title: '',
                    description: '',
                    slug: '',
                    image: '',
                    content: '',
                });
                setValidated(false);
            }
        }
    };

    return (
        <Modal show={isShow} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} ref={formRef}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            value={data.title}
                            name="title"
                            type="text"
                            placeholder="Enter your title"
                            autoFocus
                            required
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            value={data.description}
                            name="description"
                            type="text"
                            placeholder="Enter your description"
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Slug:</Form.Label>
                        <Form.Control
                            value={data.slug}
                            name="slug"
                            type="text"
                            placeholder="Enter your slug"
                            required
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image:</Form.Label>
                        <Form.Control
                            name="image"
                            type="file"
                            placeholder="Enter your image"
                            required
                            onChange={handleUploadImage}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content:</Form.Label>
                        <MdEditor
                            name="content"
                            value={data.content}
                            onChange={(value) => setData((prev) => ({ ...prev, content: value }))}
                        />
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
