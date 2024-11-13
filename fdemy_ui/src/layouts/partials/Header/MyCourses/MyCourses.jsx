import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './MyCourses.module.scss';
import MyCourseItem from './MyCourseItem';
import * as courseService from '~/services/courseService';
import Popper from '~/components/Popper';

const cx = classnames.bind(styles);

function MyCourses({ children, isShow, onHide }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        if (isShow) {
            courseService.getRegisteredCourses().then((res) => setCourses(res));
        }
    }, [isShow]);

    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[118, 10]}
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <Popper.Wrapper
                            className={cx('wrapper')}
                            position={{ top: '-16px', right: '154px' }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <Popper.Header title={'My Courses'} titleBtn={'View all'} to={'/courses'} />
                            <div className={cx('content')}>
                                {courses.length > 0 &&
                                    courses.map((course) => (
                                        <MyCourseItem
                                            key={course.id}
                                            title={course.title}
                                            image={course.image}
                                            to={'/courses/' + course.slug}
                                            process={course.userProcess}
                                            createdAt={course.createdAt}
                                        />
                                    ))}
                            </div>
                        </Popper.Wrapper>
                    );
                }}
                onClickOutside={onHide}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

MyCourses.propTypes = {
    children: PropTypes.node.isRequired,
    isShow: PropTypes.bool,
    onHide: PropTypes.func,
};

export default MyCourses;
