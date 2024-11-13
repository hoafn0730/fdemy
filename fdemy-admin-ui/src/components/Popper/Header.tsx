import classnames from 'classnames/bind';

import styles from './Popper.module.scss';
import Button from '../Button';

const cx = classnames.bind(styles);

function Header({
    title,
    titleBtn,
    to,
    onClick,
}: {
    title: string;
    titleBtn?: string;
    to?: string;
    onClick?: () => void;
}) {
    return (
        <div className={cx('header')}>
            <h6>{title}</h6>
            {titleBtn && (
                <Button text to={to} className={cx('btn-header')} onClick={onClick}>
                    {titleBtn}
                </Button>
            )}
        </div>
    );
}

export default Header;
