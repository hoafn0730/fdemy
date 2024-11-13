import classnames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';

import styles from './MyPosts.module.scss';
import MyPostItem from './MyPostItem';

const cx = classnames.bind(styles);

function MyPosts() {
    const { tab } = useOutletContext();

    return (
        <div className={cx('wrapper')}>
            {tab === 'drafts' ? (
                <>
                    <MyPostItem />
                    <MyPostItem />
                    <MyPostItem />
                </>
            ) : (
                tab === 'published' && (
                    <div className={cx('noResult')}>
                        <p>Chưa có xuất bản nào.</p>
                        <p>
                            Bạn có thể <a href="/new-post">viết bài mới</a> hoặc <a href="/blogs">đọc bài viết</a> khác
                            trên F8 nhé.
                        </p>
                    </div>
                )
            )}
        </div>
    );
}

export default MyPosts;
