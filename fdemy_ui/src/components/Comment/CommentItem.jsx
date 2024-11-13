import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Comment.module.scss';
import Avatar from '../Avatar';
import MarkdownParser from '../MarkdownParser';
import CommentBox from '../CommentBox';
import ReplyComment from './ReplyComment';

const cx = classnames.bind(styles);

function CommentItem({ item }) {
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [showRepliesMore, setShowRepliesMore] = useState(false);

    const handleReplyComment = () => {
        setShowReplyBox((prev) => !prev);
    };

    const handleShowRepliesMore = () => {
        setShowRepliesMore((prev) => !prev);
    };

    return (
        <>
            <div
                className={cx('item', {
                    replyCommentWrap: true,
                })}
            >
                <div className={cx('avatarWrap')}>
                    <Link to={'/@' + item.username}>
                        <Avatar src={item.avatar} style={{ '--font-size': '0.4rem' }} />
                    </Link>
                </div>
                <div className={cx('body')}>
                    <div className={cx('inner')}>
                        <div className={cx('commentContent')}>
                            <div className={cx('commentContentHeading')}>
                                <Link to={'/'}>
                                    <span className={cx('commentAuthor')}>{item.username}</span>
                                </Link>
                            </div>
                            <div className={cx('commentText')}>
                                <MarkdownParser
                                    content={item.comment}
                                    style={{ '--font-size': '1.4rem', '--line-height': 2 }}
                                />
                            </div>
                        </div>
                        <div className={cx('commentReact')}>
                            <span className={cx('likeComment')}>Thích</span>
                            <span className={cx('replyComment')} onClick={handleReplyComment}>
                                Trả lời
                            </span>
                            <span className={cx('createdAt')}>~ 8 tháng trước</span>
                            <span className={cx('moreBtn')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                        </div>
                    </div>
                    {showReplyBox && <CommentBox />}
                    {item.replies && item?.replies.length > 0 && (
                        <div className={cx('viewRepliesMore')} onClick={handleShowRepliesMore}>
                            <span className={cx('showHideComment')}>Xem 1 câu trả lời</span>
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                        </div>
                    )}
                </div>
            </div>
            {showRepliesMore &&
                item.replies.length > 0 &&
                item.replies.map((reply, index) => <ReplyComment key={index} item={reply} />)}
        </>
    );
}

export default CommentItem;
