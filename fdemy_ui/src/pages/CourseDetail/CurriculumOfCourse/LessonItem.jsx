import classnames from 'classnames/bind';

import styles from './CurriculumOfCourse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function LessonItem({ title, duration, index }) {
    return (
        <div className={cx('lessonItem')}>
            <span className={cx('lessonName')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCirclePlay} />
                {index + '. ' + title}
            </span>
            <span className={cx('duration')}>{duration}</span>
        </div>
    );
}

export default LessonItem;
