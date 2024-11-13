import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Inbox.module.scss';
import InboxItem from './InboxItem';
import PopperWrapper from '~/components/Popper';
import HeaderPopper from '~/components/Popper/Header';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

type InboxProps = {
    children: any;
    isShow: boolean;
    onHide: () => void;
};

function Inbox({ children, isShow, onHide }: InboxProps) {
    const { items } = useSelector((state: any) => state.notification);

    return (
        <HeadlessTippy
            visible={isShow}
            interactive
            offset={[64, 4]}
            delay={[0, 200]}
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <PopperWrapper
                        className={cx('wrapper')}
                        position={{ top: '-16px', right: '68px' }}
                        tabIndex={-1}
                        {...attrs}
                    >
                        <HeaderPopper title={'Notifications'} titleBtn={'Mark as read'} />
                        <div className={cx('content')}>
                            {items.length > 0 &&
                                items.map((item: any, index: number) => (
                                    <InboxItem
                                        key={index}
                                        data={{
                                            message: item.message,
                                            noSeen: true,
                                        }}
                                    />
                                ))}
                        </div>
                        <Button to={'/notifications'} className={cx('seeAll')}>
                            See all notifications
                        </Button>
                    </PopperWrapper>
                );
            }}
            onClickOutside={onHide}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Inbox;
