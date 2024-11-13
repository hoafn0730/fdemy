import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { useSearchParams } from 'react-router-dom';

import styles from './Tracks.module.scss';

const cx = classnames.bind(styles);

function TrackItem({ title, isDisabled, uuid, image, index }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClickTrack = () => {
        setSearchParams((params) => {
            params.set('id', uuid);
            return params;
        });
    };

    return (
        <div
            className={cx('item', {
                active: searchParams.get('id') === uuid,
                disabled: isDisabled,
            })}
            onClick={handleClickTrack}
        >
            <span className={cx('index')}>{index}</span>
            <div className={cx('info')}>
                <img src={image} alt={title} className={cx('thumb')} />
                <h3 className={cx('title')}>{title}</h3>
            </div>
        </div>
    );
}

TrackItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default TrackItem;
