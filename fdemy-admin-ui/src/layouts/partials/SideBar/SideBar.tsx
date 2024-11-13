import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';

import styles from './SideBar.module.scss';
import MenuItem, { MenuItemType } from './MenuItem';
import config from '~/config';
import Menu from './Menu';
import {
    CategoryIcon,
    DashboardIcon,
    InvoiceIcon,
    LessonIcon,
    RegisterIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';

const cx = classnames.bind(styles);

const LIST_SIDEBAR: MenuItemType[] = [
    {
        title: 'Dashboard',
        to: config.routes.dashboard,
        icon: <DashboardIcon />,
    },
    {
        title: 'User',
        to: config.routes.user + '?page=1',
        icon: <UserIcon />,
    },
    {
        title: 'Category',
        to: config.routes.category + '?page=1',
        icon: <CategoryIcon />,
    },
    {
        title: 'Course',
        to: config.routes.course + '?page=1',
        icon: <FontAwesomeIcon icon={faRectangleList} />,
    },
    {
        title: 'Lesson',
        to: config.routes.lesson + '?page=1',
        icon: <LessonIcon />,
    },
    {
        title: 'Register',
        to: config.routes.register + '?page=1',
        icon: <RegisterIcon />,
    },
    {
        title: 'Invoice',
        to: config.routes.invoice + '?page=1',
        icon: <InvoiceIcon />,
    },
    {
        title: 'Setting',
        to: config.routes.setting,
        icon: <SettingIcon />,
    },
];

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {LIST_SIDEBAR.map((item, index) => {
                    return <MenuItem key={index} title={item.title} to={item.to} icon={item.icon} />;
                })}
            </Menu>
        </aside>
    );
}

export default SideBar;
