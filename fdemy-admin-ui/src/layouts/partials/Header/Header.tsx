import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import Search from '../Search';
import Menu from './Menu';
import { MenuItem } from './Menu/MenuItem';
import Avatar from '~/components/Avatar';
import { InboxIcon, LanguageIcon } from '~/components/Icons';
import Inbox from './Inbox';

const cx = classnames.bind(styles);

const MENU_ITEMS: MenuItem[] = [
    {
        title: 'English',
        icon: <LanguageIcon />,
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    // {
    //     title: 'Feedback and help',
    //     icon: <FeedBackIcon />,
    //     to: '/feedback',
    // },
    // {
    //     title: 'Dark mode',
    //     type: 'theme',
    //     icon: <DarkModeIcon />,
    //     toggle: true,
    // },
];

function Header() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowInbox, setIsShowInbox] = useState(false);
    const { userInfo } = useSelector((state: any) => state.account);
    const { items } = useSelector((state: any) => state.notification);

    const handleClickMenu = () => {
        setIsShowMenu(true);
    };

    const handleClickHideMenu = () => {
        setIsShowMenu(false);
        setIsShowInbox(false);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('logo')}>
                    <FontAwesomeIcon icon={faCode} />
                    <span>CodeLearn</span>
                </Link>
                <div className={cx('body')}>
                    <Search />
                </div>
                <div className={cx('actions')}>
                    <Inbox isShow={isShowInbox} onHide={() => setIsShowInbox(false)}>
                        <Tippy offset={[0, 3]} delay={[0, 200]} disabled={isShowInbox} content="Inbox">
                            <button id="inbox" className={cx('action-btn')} onClick={() => setIsShowInbox(true)}>
                                <InboxIcon />
                                {items.length > 0 && <span>{items.length}</span>}
                            </button>
                        </Tippy>
                    </Inbox>

                    <Menu isShow={isShowMenu} items={MENU_ITEMS} onHide={handleClickHideMenu}>
                        <Avatar
                            src={userInfo.avatar}
                            alt={userInfo.username}
                            className={cx('avatar')}
                            style={{ '--font-size': '4px' }}
                            onClick={handleClickMenu}
                        />
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
