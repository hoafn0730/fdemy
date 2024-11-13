import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import styles from './MyBookmarks.module.scss';

const cx = classnames.bind(styles);

function MyBookmarkItem() {
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

export default MyBookmarkItem;
