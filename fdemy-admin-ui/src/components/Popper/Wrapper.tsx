import classnames from 'classnames/bind';

import styles from './Popper.module.scss';
import { ReactNode } from 'react';
// import { ArrowIcon } from '../Icons';

type WrapperProps = {
    children: ReactNode;
    className?: string;
    position?: object;
    tabIndex?: number;
};

const cx = classnames.bind(styles);

function Wrapper({ children, className, position, ...props }: WrapperProps) {
    return (
        <div className={cx('wrapper', className)} {...props}>
            {children}
            {/* {position && <ArrowIcon style={{ ...position }} className={cx('styledArrow')} />} */}
        </div>
    );
}

export default Wrapper;
