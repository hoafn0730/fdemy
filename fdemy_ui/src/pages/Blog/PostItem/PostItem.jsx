import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './PostItem.module.scss';
import Reaction from '~/components/Reaction';
import Presentation from '~/components/Presentation';

const cx = classnames.bind(styles);

function PostItem({ title, description, slug, image }) {
    const video = '';

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('author')}>
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

            <div className={cx('body')}>
                <div className={cx('info')}>
                    <Link to={'/blogs/' + slug}>
                        <h3 className={cx('title')}>{title}</h3>
                    </Link>
                    <p className={cx('description')}>{description}</p>
                    <Link to="/" className={cx('hashtag')}>
                        #reactjs
                    </Link>
                </div>
                {(image || video) && <Presentation imageUrl={image} videoUrl={video} />}
            </div>

            <div className={cx('footer')}>
                <Reaction />
            </div>
        </div>
    );
}

export default PostItem;
