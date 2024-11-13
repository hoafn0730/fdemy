import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import PopperWrapper from '~/components/Popper';
import Image from '~/components/Image';

const cx = classnames.bind(styles);

type MenuProps = {
    children: any;
    isShow: boolean;
    items: any[];
    onHide: () => void;
};

function Menu({ children, isShow, items = [], onHide }: MenuProps) {
    const [history, setHistory] = useState([{ data: items }]);
    const current: any = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item: any, index: number) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const onChange = (menuItem: any) => {
        switch (menuItem.type) {
            case 'theme': {
                return console.log(123);
            }
            case 'language': {
                return console.log(menuItem);
            }
            default:
        }
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    return (
        <HeadlessTippy
            visible={isShow}
            delay={[0, 200]}
            offset={[13, 4]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper
                    className={cx('wrapper')}
                    position={{ top: '-16px', right: '28px' }}
                    tabIndex={-1}
                    {...attrs}
                >
                    <div className={cx('list')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                        {!(history.length > 1) && (
                            <div className={cx('user')}>
                                <Image
                                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/330533/6622897029ef4.jpg"
                                    alt=""
                                    className={cx('avatar')}
                                />
                                <div className={cx('info')}>
                                    <span className={cx('name')}>Hoàn Trần</span>
                                    <div className={cx('username')}>
                                        @<span>hoafn.t</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={cx('body')}>{renderItems()}</div>
                    </div>
                </PopperWrapper>
            )}
            onClickOutside={onHide}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
