import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { LessonType } from './Lesson';
import MdEditor from '~/components/MdEditor';
import courseService from '~/services/courseService';
import { useSearchParams } from 'react-router-dom';

// import MdEditor from '~/components/MdEditor';

type CreateAndUpdateProps = {
    dataRaw: LessonType | undefined;
    isShow: boolean;
    onSave: (data: any, type: string) => void;
    onClose: () => void;
};

function CreateAndUpdate({ dataRaw, isShow, onSave, onClose }: CreateAndUpdateProps) {
    const [validated, setValidated] = useState(false);
    const [options, setOptions] = useState([]);
    const [isUpload, setIsUpload] = useState(false);
    const [searchParams] = useSearchParams();
    const formRef = useRef<any>();

    const [data, setData] = useState<LessonType>({
        id: dataRaw?.id ?? 0,
        courseId: dataRaw?.courseId || Number(searchParams.get('course')) || 0,
        title: dataRaw?.title ?? '',
        description: dataRaw?.description ?? '',
        image: dataRaw?.image ?? '',
        content: dataRaw?.content ?? '',
        duration: dataRaw?.duration ?? 0,
        videoType: dataRaw?.videoType ?? '',
        video: dataRaw?.video ?? '',
    });

    useEffect(() => {
        setData({
            id: dataRaw?.id ?? 0,
            courseId: dataRaw?.courseId || Number(searchParams.get('course')) || 0,
            title: dataRaw?.title ?? '',
            description: dataRaw?.description ?? '',
            image: dataRaw?.image ?? '',
            content: dataRaw?.content ?? '',
            duration: dataRaw?.duration ?? 0,
            videoType: dataRaw?.videoType ?? '',
            video: dataRaw?.video ?? '',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const handleChangeVideo = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        console.log('🚀 ~ handleChangeVideo ~ target:', target);
        const files: any = target?.files;
        console.log('🚀 ~ handleChangeVideo ~ files:', files);

        setData((prev) => ({ ...prev, video: isUpload ? files[0] : target.value }));
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
                    title: '',
                    description: '',
                    image: '',
                    content: '',
                    duration: 0,
                    videoType: '',
                    video: '',
                });
                setValidated(false);
            } else {
                onSave(data, 'create');
                setData({
                    id: 0,
                    courseId: 0,
                    title: '',
                    description: '',
                    image: '',
                    content: '',
                    duration: 0,
                    videoType: '',
                    video: '',
                });
                setValidated(false);
            }
        }
    };

    useEffect(() => {
        courseService.getCourses({}).then((res) => {
            setOptions(res.data);
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
                        <Form.Label>Image:</Form.Label>
                        <Form.Control
                            name="image"
                            type="file"
                            placeholder="Enter your image"
                            required
                            onChange={handleUploadImage}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Video:</Form.Label>
                        <Form.Control
                            name="video"
                            type={isUpload ? 'file' : 'text'}
                            placeholder="Enter your video"
                            required
                            onChange={handleChangeVideo}
                        />
                        <Button className="mt-2" onClick={() => setIsUpload((prev: boolean) => !prev)}>
                            {isUpload ? 'Link' : 'Upload'}
                        </Button>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Duration:</Form.Label>
                        <Form.Control
                            value={data.duration}
                            name="duration"
                            type="number"
                            placeholder="Enter your duration"
                            required
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Course:</Form.Label>
                        <Form.Select value={data.courseId} name="courseId" size="lg" onChange={handleChange}>
                            <option disabled value={0}>
                                -- Chọn khoá học --
                            </option>
                            {options.map((option: any) => (
                                <option key={option.id} value={option?.id}>
                                    {option.title}
                                </option>
                            ))}
                        </Form.Select>
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
