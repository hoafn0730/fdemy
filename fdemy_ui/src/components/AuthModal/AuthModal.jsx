import classnames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './AuthModal.module.scss';
import { closeAuthModal, closingAuthModal } from '~/store/actions/authModalAction';

const cx = classnames.bind(styles);

function AuthModal({ children }) {
    const { isClosing } = useSelector((state) => state.authModal);
    const dispatch = useDispatch();

    const handleCloseAuthModal = () => {
        dispatch(closingAuthModal());
        setTimeout(() => {
            dispatch(closeAuthModal());
        }, 300);
    };

    return (
        <div
            className={cx('wrapper', {
                closing: isClosing,
            })}
        >
            <div className={cx('overlay')} onClick={handleCloseAuthModal}></div>
            <div className={cx('content')}>
                <button className={cx('close')} onClick={handleCloseAuthModal}>
                    <span>×</span>
                </button>
                {/* <div className={cx('iframe')}>{children}</div> */}
                <iframe
                    title="1"
                    src={`${process.env.REACT_APP_ACCOUNTS_LOGIN_URL}?serviceURL=${encodeURIComponent(
                        window.location.origin,
                    )}&popup=true`}
                    className={cx('iframe')}
                    frameborder="0"
                ></iframe>
            </div>
        </div>
    );
}

export default AuthModal;
