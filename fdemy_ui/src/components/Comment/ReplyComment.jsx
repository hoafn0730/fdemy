import classnames from 'classnames/bind';

import styles from './Comment.module.scss';
import CommentItem from './CommentItem';

const cx = classnames.bind(styles);

function ReplyComment({ item }) {
    return (
        <div className={cx('replyWrap')}>
            <CommentItem item={item} />
        </div>
    );
}

export default ReplyComment;
