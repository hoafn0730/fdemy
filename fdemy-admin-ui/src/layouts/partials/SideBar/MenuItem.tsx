import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

import styles from './SideBar.module.scss';

export type MenuItemType = {
    title: string;
    to: string;
    icon: ReactNode;
    iconActive?: ReactNode;
};

const cx = classnames.bind(styles);

function MenuItem({ title, to, icon, iconActive }: MenuItemType) {
    return (
        <li className={cx('item')}>
            <NavLink
                to={to}
                className={(nav) => {
                    return cx('link', {
                        active: nav.isActive,
                    });
                }}
            >
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('active-icon')}>{iconActive}</span>
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </li>
    );
}

export default MenuItem;
