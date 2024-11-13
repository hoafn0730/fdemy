import classnames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './SideBar.module.scss';

const cx = classnames.bind(styles);

function Menu({ children }: { children: ReactNode }) {
    return <ul className={cx('list')}>{children}</ul>;
}

export default Menu;
