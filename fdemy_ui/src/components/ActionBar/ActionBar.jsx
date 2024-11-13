import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { faAngleLeft, faAngleRight, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams } from 'react-router-dom';

import styles from './ActionBar.module.scss';
import Button from '../Button';

const cx = classnames.bind(styles);

function ActionBar({ prevStep, nextStep, isShowTracks, canNext, onChangeShow }) {
    const [, setSearchParams] = useSearchParams();

    const handleClickPrevStep = () => {
        setSearchParams((params) => {
            params.set('id', prevStep);
            return params;
        });
    };

    const handleClickNextStep = async () => {
        setSearchParams((params) => {
            params.set('id', nextStep);
            return params;
        });
    };
    return (
        <div className={cx('wrapper')}>
            <Button
                className={cx('btn')}
                outline={!!prevStep}
                disabled={!prevStep}
                leftIcon={<FontAwesomeIcon icon={faAngleLeft} />}
                onClick={handleClickPrevStep}
            >
                Previous
            </Button>
            <Button
                className={cx('btn')}
                outline={!!nextStep}
                disabled={!canNext || !nextStep}
                rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                onClick={handleClickNextStep}
            >
                Next
            </Button>
            <div className={cx('toggle-wrap')}>
                <h3 className={cx('track-title')}>Track List</h3>
                <button className={cx('toggle-btn')} onClick={onChangeShow}>
                    {isShowTracks ? <FontAwesomeIcon icon={faArrowRight} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
        </div>
    );
}

ActionBar.propTypes = {
    isShowTracks: PropTypes.bool,
    onChangeShow: PropTypes.func,
};

export default ActionBar;
