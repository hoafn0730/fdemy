import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Blog.module.scss';
import PostItem from './PostItem';
import IndexModule from '~/components/IndexModule';
import Heading from '~/components/Heading';
import { getBlogs } from '~/services/blogService';

const cx = classnames.bind(styles);

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs().then((res) => setBlogs(res.data));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Heading className={cx('heading')} title="Bài viết nổi bật" />
            <IndexModule className={cx('grid')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-9')}>
                        <div className={cx('body')}>
                            <div className={cx('list')}>
                                {blogs.length > 0 &&
                                    blogs.map((item) => (
                                        <PostItem
                                            key={item.id}
                                            title={item.title}
                                            description={item.description}
                                            slug={item.slug}
                                            image={item.image}
                                        />
                                    ))}
                            </div>
                        </div>
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-3')}>
                        <div className={cx('topic')}>
                            <h3>Các chủ đề được đề xuất</h3>
                            <ul>
                                <li>
                                    <Link to="/blog/topic/front-end-mobile-apps">Front-end / Mobile apps</Link>
                                </li>
                                <li>
                                    <Link to="/blog/topic/back-end-devops">Back-end / Devops</Link>
                                </li>
                                <li>
                                    <Link to="/blog/topic/ui-ux-design">UI / UX / Design</Link>
                                </li>
                                <li>
                                    <Link to="/blog/topic/others">Others</Link>
                                </li>
                            </ul>
                        </div>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default Blog;
