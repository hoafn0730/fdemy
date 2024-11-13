import classnames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';

import styles from './MyBookmarks.module.scss';
import MyBookmarkItem from './MyBookmarkItem';

const cx = classnames.bind(styles);

function MyBookmarks() {
    const { tab } = useOutletContext();

    return (
        <div className={cx('wrapper')}>
            {tab === 'posts' && (
                <>
                    <MyBookmarkItem />
                    <MyBookmarkItem />
                    <MyBookmarkItem />
                </>
            )}
        </div>
    );
}

export default MyBookmarks;
