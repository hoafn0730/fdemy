import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './SideBar.module.scss';

const cx = classnames.bind(styles);

function Menu({ children }) {
    return <ul className={cx('list')}>{children}</ul>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
