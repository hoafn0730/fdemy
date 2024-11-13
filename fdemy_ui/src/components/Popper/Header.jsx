import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Popper.module.scss';
import Button from '../Button';

const cx = classnames.bind(styles);

function Header({ title, titleBtn, to, onClick }) {
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

Header.propTypes = {
    title: PropTypes.string.isRequired,
    titleBtn: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.string,
};

export default Header;
