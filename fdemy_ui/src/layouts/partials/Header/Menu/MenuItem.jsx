import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';
import ToggleButton from '~/components/ToggleButton';

const cx = classnames.bind(styles);

const defaultFnc = () => {};

function MenuItem({ data, onClick }) {
    const classes = cx('item', {
        separate: data.separate,
    });

    return (
        <Button to={data.to} className={classes} leftIcon={data.icon} onClick={data.toggle ? defaultFnc : onClick}>
            {data.title}
            {data.toggle && <ToggleButton isChecked={data.isDarkMode} onChange={onClick} />}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
