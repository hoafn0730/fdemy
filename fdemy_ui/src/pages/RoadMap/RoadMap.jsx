import classnames from 'classnames/bind';

import styles from './RoadMap.module.scss';
import LearningPath from './LearningPath';
import Heading from '~/components/Heading';
import { useEffect, useState } from 'react';
import * as categoryService from '~/services/categoryService';

const cx = classnames.bind(styles);

function RoadMap() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryService.getCategories().then((res) => setCategories(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Heading
                title="Road Map"
                desc={`Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí
                    "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".`}
            />
            <div className={cx('body')}>
                <div className={cx('learningPath')}>
                    {categories.map((category) => (
                        <LearningPath
                            key={category.id}
                            title={category.title}
                            slug={category.slug}
                            desc={category.description}
                            image={category.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RoadMap;
