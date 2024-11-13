import classnames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

import styles from './BlogDetail.module.scss';
import IndexModule from '~/components/IndexModule';
import Heading from '~/components/Heading';
import MarkdownParser from '~/components/MarkdownParser';
import Reaction from '~/components/Reaction';
import { getBlogBySlug } from '~/services/blogService';

const cx = classnames.bind(styles);

function BlogDetail() {
    const [blog, setBlog] = useState();
    const { slug } = useParams();

    useEffect(() => {
        getBlogBySlug(slug).then((res) => setBlog(res.data));
    }, [slug]);

    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-3')}>
                        <div className={cx('aside')}>
                            <div className={cx('info')}>
                                <div>
                                    <div className={cx('user')}>
                                        <Link to="/@hoafn0730">
                                            <img
                                                className={cx('avatar')}
                                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/128430/63079012d4a87.jpg"
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="/@hoafn0730">
                                            <span>hoafn.t_</span>
                                        </Link>
                                    </div>
                                    <div className={cx('createdAt')}>~ 1 tháng trước</div>
                                </div>
                                <div className={cx('actions')}>
                                    <div className={cx('bookmark_toggleBtn', 'optionBtn')}>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>
                                    <div className={cx('optionBtn')}>
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                </div>
                            </div>
                            <Reaction className={cx('reaction')} />
                        </div>
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-7')}>
                        <Heading title={blog?.title} />
                        <MarkdownParser className={cx('markdownParser')} content={blog?.content + ''} />
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-2')}>
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

export default BlogDetail;
