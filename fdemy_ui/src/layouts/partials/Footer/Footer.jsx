import classnames from 'classnames/bind';

import styles from './Footer.module.scss';
import IndexModule from '~/components/IndexModule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Footer() {
    return (
        // Footer
        <footer className={cx('wrapper')}>
            <IndexModule className={cx('grid', 'wide')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-3')}>
                        <Link to="/" className={cx('logo-link')}>
                            <FontAwesomeIcon icon={faCode} className={cx('logo')} />
                            Fdemy
                        </Link>
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-2')}>
                        <h1 className={cx('heading')}>Thông tin</h1>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Giới thiệu
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Liên hệ
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Điều khoản
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Bảo mật
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Cơ hội việc làm
                                </a>
                            </li>
                        </ul>
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-2')}>
                        <h1 className={cx('heading')}>Khám phá</h1>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Game Nester
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Game CSS Diner
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Game CSS Selectors
                                </a>
                            </li>
                        </ul>
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-2')}>
                        <h1 className={cx('heading')}>Công cụ</h1>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Tạo CV xin việc
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Rút gọn liên kết
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    Snippet generator
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    CSS Grid generator
                                </a>
                            </li>
                        </ul>
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-3')}>
                        <h3 className={cx('heading')}>THEO DÕI</h3>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    <FontAwesomeIcon icon={faFacebook} className={cx('item-icon')} />
                                    Facebook
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    <FontAwesomeIcon icon={faInstagram} className={cx('item-icon')} />
                                    Instagram
                                </a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/" className={cx('item-link')}>
                                    <FontAwesomeIcon icon={faLinkedin} className={cx('item-icon')} />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </IndexModule>
                </IndexModule>
                <div className={cx('bottom')}>
                    <p className={cx('text')}>© 2018 - 2023 Fdemy. Nền tảng học lập trình hàng đầu Việt Nam</p>
                </div>
            </IndexModule>
        </footer>
    );
}

export default Footer;
