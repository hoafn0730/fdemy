import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Box.module.scss';

const cx = classnames.bind(styles);

function Box({ title, children, className }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
        >
            <h4 className={cx('title')}>{title}</h4>
            {children}
        </div>
    );
}

Box.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Box;
