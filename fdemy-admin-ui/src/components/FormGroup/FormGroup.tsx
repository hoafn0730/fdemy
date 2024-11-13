import classnames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './FormGroup.module.scss';

const cx = classnames.bind(styles);

function FormGroup({ children }: { children: ReactNode }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default FormGroup;
