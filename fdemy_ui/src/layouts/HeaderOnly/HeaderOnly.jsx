import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './HeaderOnly.module.scss';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const cx = classnames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </main>
            <Footer />
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
