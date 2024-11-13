import classnames from 'classnames/bind';

import styles from './Inbox.module.scss';

const cx = classnames.bind(styles);

function InboxItem({ data = {} }) {
    const classes = cx('item', {
        noSeen: data.noSeen,
    });

    return (
        <div className={classes}>
            <img
                src="http://localhost:3000/static/media/avatar.629fae61566dbce528a0.jpg"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('message')}>
                <div>
                    {data.message || (
                        <>
                            Bài học<strong> Giới thiệu khóa học Sass </strong> mới được thêm vào.
                        </>
                    )}
                </div>
                <span className={cx('createdAt')}>12/10/2023</span>
            </div>
        </div>
    );
}

export default InboxItem;
