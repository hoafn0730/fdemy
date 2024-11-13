import classnames from 'classnames/bind';

import styles from './FormLabel.module.scss';

const cx = classnames.bind(styles);

function FormLabel({ label, labelRight }) {
    return (
        <div className={cx('wrapper')}>
            <label className={cx('label')}>{label}</label>
            <label className={cx('label')}>{labelRight}</label>
        </div>
    );
}

export default FormLabel;
