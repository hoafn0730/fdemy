import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './MyPosts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function MyPostItem() {
    return (
        <div className={cx('item')}>
            <h3 className={cx('title')}>
                <Link to={'/'}>MyPost1</Link>
            </h3>
            <div className={cx('author')}>
                <Link to={'/'}>Chỉnh sửa một giờ trước</Link>
            </div>
            {/* options */}
            <div className={cx('more')}>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </div>
    );
}

export default MyPostItem;
