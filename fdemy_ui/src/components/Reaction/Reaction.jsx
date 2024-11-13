import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Reaction.module.scss';
import { CommentIcon, LikeIcon, ShareIcon } from '../Icons';

const cx = classnames.bind(styles);

function Reaction({ className }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
        >
            <button className={cx('btnReact')}>
                <LikeIcon />
                <span className={cx('value')}>100</span>
            </button>
            <button className={cx('btnReact')}>
                <CommentIcon />
                <span className={cx('value')}>20</span>
            </button>
            <button className={cx('btnReact')}>
                <ShareIcon />
                <span className={cx('value')}>1</span>
            </button>
        </div>
    );
}

Reaction.propTypes = {
    className: PropTypes.string,
};
export default Reaction;
