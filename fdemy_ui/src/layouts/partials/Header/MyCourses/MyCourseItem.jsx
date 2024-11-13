import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';

import styles from './MyCourses.module.scss';
import Image from '~/components/Image';

const cx = classnames.bind(styles);

function MyCourseItem({ title, image, to, process, createdAt }) {
    return (
        <div className={cx('course-item')}>
            <Link to={to} className={cx('course-link')}>
                <Image src={image} alt={title} className={cx('course-thumb')} />

                <div className={cx('course-info')}>
                    <h3 className={cx('course-title')}>{title}</h3>
                    <p className={cx('last-completed')}>
                        Học cách đây <span>{moment(createdAt).format('YYYY-MM-DD HH:mm:ss').toString()}</span> trước
                    </p>

                    <Tippy delay={[0, 200]} content={process ?? 0 + '%'} placement="bottom">
                        <div className={cx('VerticalProgressBar')} style={{ '--progress': `${process ?? 0}%` }} />
                    </Tippy>
                </div>
            </Link>
        </div>
    );
}

export default MyCourseItem;
