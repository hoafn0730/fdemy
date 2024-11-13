import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.scss';

const cx = classnames.bind(styles);

function MenuItem({ data }) {
    return (
        <li className={cx('item')}>
            <NavLink
                to={data.path}
                className={(nav) => {
                    return cx('link', {
                        active: nav.isActive,
                    });
                }}
            >
                <span className={cx('icon')}>{data.icon}</span>
                <span className={cx('active-icon')}>{data.iconActive}</span>
                <span className={cx('title')}>{data.title}</span>
            </NavLink>
        </li>
    );
}

export default MenuItem;
