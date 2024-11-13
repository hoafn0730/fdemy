import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('header')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <h3 className={cx('title')}>{title}</h3>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
