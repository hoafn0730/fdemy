import classnames from 'classnames/bind';

import styles from './SideBar.module.scss';
import {
    BlogActiveIcon,
    BlogIcon,
    HomeActiveIcon,
    HomeIcon,
    // MessageActiveIcon,
    // MessageIcon,
    RoadMapActiveIcon,
    RoadMapIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './MenuItem';

const cx = classnames.bind(styles);

const LIST_SIDEBAR = [
    {
        title: 'Home',
        path: config.routes.home,
        icon: <HomeIcon />,
        iconActive: <HomeActiveIcon />,
    },
    {
        title: 'Road Map',
        path: config.routes.roadMap,
        icon: <RoadMapIcon />,
        iconActive: <RoadMapActiveIcon />,
    },
    {
        title: 'Blogs',
        path: config.routes.blog,
        icon: <BlogIcon />,
        iconActive: <BlogActiveIcon />,
    },
    // {
    //     title: 'Messages',
    //     path: config.routes.message,
    //     icon: <MessageIcon />,
    //     iconActive: <MessageActiveIcon />,
    // },
];

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {LIST_SIDEBAR.map((item, index) => {
                    return <MenuItem key={index} data={item} />;
                })}
            </Menu>
        </aside>
    );
}

export default SideBar;
