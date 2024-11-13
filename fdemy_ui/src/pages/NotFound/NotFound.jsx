import classnames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classnames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <h1>Not found</h1>
        </div>
    );
}

export default NotFound;
