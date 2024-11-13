import classnames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../partials/Header';
import SideBar from '../partials/SideBar';
import Footer from '../partials/Footer';

const cx = classnames.bind(styles);

const DefaultLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('container')}>
                <div className={cx('sidebar')}>
                    <SideBar />
                </div>
                <div className={cx('content')}>{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
