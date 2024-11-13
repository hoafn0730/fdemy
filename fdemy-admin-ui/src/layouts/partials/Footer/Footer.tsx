import classnames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className="d-sm-flex justify-content-center">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Copyright © 2024. CodeLearn
                </span>
            </div>
        </footer>
    );
}

export default Footer;
