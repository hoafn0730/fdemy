import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Inbox.module.scss';
import InboxItem from './InboxItem';
import Button from '~/components/Button';
import Popper from '~/components/Popper';

const cx = classnames.bind(styles);

function Inbox({ children, isShow, onHide }) {
    const { items } = useSelector((state) => state.notification);

    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[64, 4]}
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <Popper.Wrapper
                            className={cx('wrapper')}
                            position={{ top: '-16px', right: '68px' }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <Popper.Header title={'Notifications'} titleBtn={'Mark as read'} />
                            <div className={cx('content')}>
                                {items.length > 0 &&
                                    items.map((item, index) => (
                                        <InboxItem
                                            key={index}
                                            data={{
                                                message: item.message,
                                                noSeen: true,
                                            }}
                                        />
                                    ))}
                                <InboxItem />
                            </div>
                            <Button to={'/notifications'} className={cx('seeAll')}>
                                See all notifications
                            </Button>
                        </Popper.Wrapper>
                    );
                }}
                onClickOutside={onHide}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

Inbox.propTypes = {
    children: PropTypes.node.isRequired,
    isShow: PropTypes.bool,
    onHide: PropTypes.func,
};

export default Inbox;
