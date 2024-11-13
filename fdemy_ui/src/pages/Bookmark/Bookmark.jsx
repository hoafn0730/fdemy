import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styles from './Bookmark.module.scss';
import IndexModule from '~/components/IndexModule';
import Heading from '~/components/Heading';
import HeadingTabs from '~/components/HeadingTabs';

const cx = classnames.bind(styles);

const tabs = [{ title: 'Posts', to: 'posts' }];

function Bookmark() {
    const location = useLocation();
    const [tab, setTab] = useState();

    useEffect(() => {
        const currentRoute = location.pathname.split('/')[location.pathname.split('/').length - 1];
        setTab(currentRoute);
    }, [location.pathname]);
    //
    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-8')}>
                        <Heading title="Bookmarks" />
                        <HeadingTabs tabs={tabs} />
                        <Outlet context={{ tab }} />
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-4')}>
                        <></>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default Bookmark;
