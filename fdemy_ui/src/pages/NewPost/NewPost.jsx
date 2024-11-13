import classnames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './NewPost.module.scss';
import IndexModule from '~/components/IndexModule';
import ContentEditable from '~/components/ContentEditable';
import MdEditor from '~/components/MdEditor';
import Button from '~/components/Button';
import { createPost } from '~/services/blogService';
import generateSlug from '~/utils/generateSlug';
import { delay } from '~/utils/delay';

const cx = classnames.bind(styles);

function NewPost() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const contentEditableRef = useRef();
    const titleRef = useRef(document.title);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = title || titleRef.current;
    }, [title]);

    const handleChangeTitle = (e) => {
        setTitle(e.target.innerText);
    };

    const handleChange = ({ html, text }) => {
        setValue(text);
    };

    const handlePublishPost = () => {
        createPost({
            userId: 1,
            title: title,
            slug: generateSlug(title),
            content: value,
        }).then(() => {
            const resolveWithSomeData = delay(1000);
            toast.promise(resolveWithSomeData, {
                pending: {
                    render() {
                        document.title = titleRef.current;
                        return;
                    },
                    icon: false,
                },
                success: {
                    render() {
                        navigate('/');
                        return;
                    },
                },
            });
        });
    };

    return (
        <IndexModule className={cx('grid')}>
            <IndexModule className={cx('row')}>
                <IndexModule className={cx('col', 'l-12', 'm-12', 'c-12')}>
                    <div className={cx('wrapper')}>
                        <Button primary rounded className={cx('btn')} onClick={handlePublishPost}>
                            Publish
                        </Button>
                        <ContentEditable
                            ref={contentEditableRef}
                            value={title}
                            className={cx('title-input')}
                            onChange={handleChangeTitle}
                        />
                        <div className={cx('text-editor')}>
                            <MdEditor
                                value={value}
                                onChange={handleChange}
                                style={{ marginBottom: '31px', height: 'calc(-100px + 100vh)' }}
                            />
                        </div>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                            theme="light"
                        />
                    </div>
                </IndexModule>
            </IndexModule>
        </IndexModule>
    );
}

export default NewPost;
