import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';
import { ArrowIcon } from '../Icons';

const cx = classnames.bind(styles);

function Wrapper({ children, className, position, ...props }) {
    return (
        <div className={cx('wrapper', className)} {...props}>
            {children}
            {position && <ArrowIcon style={{ ...position }} className={cx('styledArrow')} />}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    position: PropTypes.object,
};

export default Wrapper;
