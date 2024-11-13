import { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import {
    faAngleLeft,
    faBars,
    faCode,
    faEllipsisVertical,
    faPenToSquare,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import Search from '../Search';
import Category from './Category';
import MyCourses from './MyCourses';
import Inbox from './Inbox';
import Menu from './Menu';
import config from '~/config';
import Button from '~/components/Button';
import Image from '~/components/Image';
import {
    BookMarkIcon,
    DarkModeIcon,
    FeedBackIcon,
    InboxActiveIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import { openAuthModal } from '~/store/actions/authModalAction';
import useLocalStorage from '~/hooks/useLocalStorage';

const cx = classnames.bind(styles);

const MENU_ITEMS = [
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
    {
        title: 'Feedback and help',
        icon: <FeedBackIcon />,
        to: '/feedback',
    },
    {
        title: 'Dark mode',
        type: 'theme',
        icon: <DarkModeIcon />,
        toggle: true,
    },
];

function Header() {
    const [showPopper, setShowPopper] = useState({
        category: false,
        inbox: false,
        myCourses: false,
        menu: false,
    });

    const firstClickRef = useRef({ inbox: false, myCourses: false });

    const { items } = useSelector((state) => state.notification);
    const { userInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 900px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 630px)' });
    // const [auth] = useLocalStorage('persist:auth');
    // const userInfo = auth ? JSON.parse(auth.userInfo) : info;

    const userMenu = [
        {
            title: 'Profile',
            icon: <UserIcon />,
            to: '/@' + userInfo?.username,
        },
        {
            title: 'Bookmarks',
            icon: <BookMarkIcon />,
            to: '/me/bookmarks',
        },
        {
            title: 'Posts',
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
            to: '/me/posts/drafts',
        },
        {
            title: 'Settings',
            icon: <SettingIcon />,
            to: '/settings/personal',
        },
        ...MENU_ITEMS,
        {
            type: 'logout',
            title: 'Log out',
            icon: <LogoutIcon />,
            separate: true,
        },
    ];

    const handleShowPopper = (e) => {
        const { id } = e.target.closest('button');

        if (id === 'my-courses') {
            firstClickRef.current.myCourses = !firstClickRef.current.myCourses;
            if (firstClickRef.current.myCourses) {
                setShowPopper({ myCourses: true });
            } else {
                setShowPopper({ myCourses: false });
            }
        } else if (id === 'inbox') {
            firstClickRef.current.inbox = !firstClickRef.current.inbox;
            if (firstClickRef.current.inbox) {
                setShowPopper({ inbox: true });
            } else {
                setShowPopper({ inbox: false });
            }
        } else if (id === 'menu') {
            firstClickRef.current.menu = !firstClickRef.current.menu;
            if (firstClickRef.current.menu) {
                setShowPopper({ menu: true });
            } else {
                setShowPopper({ menu: false });
            }
        } else if (id === 'category') {
            firstClickRef.current.category = !firstClickRef.current.category;
            if (firstClickRef.current.category) {
                setShowPopper({ category: true });
            } else {
                setShowPopper({ category: false });
            }
        }
    };

    const handleHidePopper = () => {
        firstClickRef.current = {
            category: false,
            myCourses: false,
            inbox: false,
            menu: false,
        };
        setShowPopper({ category: false, myCourses: false, inbox: false, menu: false });
    };

    const handleClickLogin = () => {
        dispatch(openAuthModal());
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCode} />
                        <strong>Fdemy</strong>
                    </Link>

                    {isTabletOrMobile && (
                        <>
                            {location.pathname === '/' ? (
                                <Category isShow={showPopper.category} onHide={handleHidePopper}>
                                    <Tippy delay={[0, 200]} disabled={showPopper.category} content="Categories">
                                        <button id="category" className={cx('action-btn')} onClick={handleShowPopper}>
                                            <span>Categories</span>
                                        </button>
                                    </Tippy>
                                </Category>
                            ) : (
                                <button
                                    className={cx('btn-back')}
                                    onClick={() => {
                                        if (['/road-map', '/blogs', '/messages'].includes(location.pathname)) {
                                            navigate('/');
                                        } else {
                                            navigate(-1);
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                    <span>Back</span>
                                </button>
                            )}
                        </>
                    )}
                </div>

                {isMobile && (
                    <div className={cx('body')}>
                        <Search />
                    </div>
                )}

                <div className={cx('actions')}>
                    {userInfo ? (
                        <>
                            {isTabletOrMobile && (
                                <>
                                    <MyCourses isShow={showPopper.myCourses} onHide={handleHidePopper}>
                                        <Tippy delay={[0, 200]} disabled={showPopper.myCourses} content="My Courses">
                                            <button
                                                id="my-courses"
                                                className={cx('action-btn')}
                                                onClick={handleShowPopper}
                                            >
                                                <span>My Courses</span>
                                            </button>
                                        </Tippy>
                                    </MyCourses>
                                    <Tippy offset={[0, 14]} delay={[0, 200]} content="New post">
                                        <div>
                                            <Button to={'/new-post'} className={cx('action-btn', 'newPostBtn')}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </Button>
                                        </div>
                                    </Tippy>
                                </>
                            )}

                            <Inbox isShow={showPopper.inbox} onHide={handleHidePopper}>
                                <Tippy offset={[0, 3]} delay={[0, 200]} disabled={showPopper.inbox} content="Inbox">
                                    <button id="inbox" className={cx('action-btn')} onClick={handleShowPopper}>
                                        {showPopper.inbox ? <InboxActiveIcon /> : <InboxIcon />}
                                        {items.length > 0 && <span className={cx('number')}>{items.length}</span>}
                                    </button>
                                </Tippy>
                            </Inbox>
                        </>
                    ) : (
                        <>
                            <Button primary rounded className={cx('login-btn')} onClick={handleClickLogin}>
                                Login
                            </Button>
                        </>
                    )}

                    <Menu
                        isShow={showPopper.menu}
                        isLogin={!!userInfo}
                        items={!!userInfo ? userMenu : MENU_ITEMS}
                        onHide={handleHidePopper}
                    >
                        {!!userInfo ? (
                            <button id="menu" className={cx('action-btn')} onClick={handleShowPopper}>
                                <Image className={cx('avatar')} src={userInfo?.avatar} alt="avatar" />
                            </button>
                        ) : (
                            <button id="menu" className={cx('action-btn')} onClick={handleShowPopper}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
