import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ToggleButton.module.scss';

const cx = classnames.bind(styles);

function ToggleButton({ isChecked, onChange }) {
    return (
        <label className={cx('switch')}>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <span className={cx('slider', 'round')} />
        </label>
    );
}

ToggleButton.propTypes = {
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default ToggleButton;
