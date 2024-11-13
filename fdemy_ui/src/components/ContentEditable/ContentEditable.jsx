import classnames from 'classnames/bind';

import styles from './ContentEditable.module.scss';
import { forwardRef } from 'react';

const cx = classnames.bind(styles);

function ContentEditable({ className, onChange }, ref) {
    return (
        <div
            ref={ref}
            spellCheck="false"
            data-empty-text="Tiêu đề"
            contentEditable
            className={cx('wrapper', {
                [className]: className,
            })}
            onInput={onChange}
        />
    );
}

export default forwardRef(ContentEditable);
