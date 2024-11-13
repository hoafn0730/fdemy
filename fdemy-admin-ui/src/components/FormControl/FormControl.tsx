import classnames from 'classnames/bind';

import styles from './FormControl.module.scss';
import { SyntheticEvent } from 'react';

const cx = classnames.bind(styles);

type FormControlProps = {
    value: string;
    name: string;
    type: string;
    placeholder?: string;
    invalid?: boolean;
    onFocus?: (e: SyntheticEvent) => void;
    onChange: (e: SyntheticEvent) => void;
};

function FormControl({ value, name, type, placeholder, invalid, onFocus, onChange, ...props }: FormControlProps) {
    return (
        <div
            className={cx('wrapper', {
                error: invalid,
            })}
        >
            <input
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                onFocus={onFocus}
                onChange={onChange}
                {...props}
            />
        </div>
    );
}

export default FormControl;
