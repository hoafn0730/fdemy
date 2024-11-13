import classnames from 'classnames/bind';

import styles from './NoInternet.module.scss';
import Button from '../../components/Button';

const cx = classnames.bind(styles);

function NoInternet() {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className={cx('wrapper')}>
            <h1>Ô nâu! Có gì đó không ổn :(</h1>
            <p>
                Hãy nhấn vào <strong>Tải lại trang</strong> phía dưới. Nếu vẫn thấy thông báo này bạn hãy thử nhấn tổ
                hợp phím <strong>Ctrl + F5</strong> nhé. Xin lỗi vì sự bất tiện này.
            </p>
            <Button className={cx('reloadBtn')} type="button" onClick={handleReload}>
                <span>Tải lại trang</span>
            </Button>
        </div>
    );
}

export default NoInternet;
