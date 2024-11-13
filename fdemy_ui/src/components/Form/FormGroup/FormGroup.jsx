import classnames from 'classnames/bind';

import styles from './FormGroup.module.scss';

const cx = classnames.bind(styles);

function FormGroup({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default FormGroup;
