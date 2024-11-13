import classnames from 'classnames/bind';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Card.module.scss';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Card({ title, info, name, isChecked, onChange }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <input
                    defaultChecked={isChecked}
                    className={cx('check')}
                    name={name}
                    type="radio"
                    onChange={(e) => onChange(e, info)}
                />
                <FontAwesomeIcon className={cx('icon')} icon={faCreditCard} />
                <span className={cx('title')}>{title}</span>
            </div>
            <Button className={cx('remove-btn')}>Remove card</Button>
        </div>
    );
}

export default Card;
