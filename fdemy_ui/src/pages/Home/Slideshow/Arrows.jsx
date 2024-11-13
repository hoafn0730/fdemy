import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Slideshow.module.scss';

const cx = classnames.bind(styles);

function NextArrow({ onClick }) {
    return (
        <div className={cx('arrow', 'next')} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    );
}

function PrevArrow({ onClick }) {
    return (
        <div className={cx('arrow', 'prev')} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </div>
    );
}

export { NextArrow, PrevArrow };
