import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './CommentBox.module.scss';
import Avatar from '../Avatar';
import Button from '../Button';

const cx = classnames.bind(styles);

function CommentBox({ value, className, style, onChange }) {
    const [showAction, setShowAction] = useState(false);

    const { userInfo } = useSelector((state) => state.user);

    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
            style={style}
        >
            <div className={cx('avatarWrap')}>
                <Link to={'/@' + userInfo.username}>
                    <Avatar src={userInfo.avatar} style={{ '--font-size': '0.4rem' }} />
                </Link>
            </div>
            <div className={cx('commentContent')}>
                <input
                    value={value}
                    className={cx('input')}
                    type="text"
                    placeholder="Bạn có thắc mắc gì trong bài học này?"
                    onFocus={() => setShowAction(true)}
                    onBlur={() => setShowAction(false)}
                    onChange={onChange}
                />
                {showAction && (
                    <div className={cx('actions')}>
                        <Button outline rounded className={cx('btn')} onClick={() => setShowAction(false)}>
                            Hủy
                        </Button>
                        <Button primary rounded className={cx('btn', 'ok')}>
                            Bình luận
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommentBox;
