import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Category.module.scss';
import CategoryItem from './CategoryItem';
import * as categoryService from '~/services/categoryService';
import Popper from '~/components/Popper';

const cx = classnames.bind(styles);

function Category({ children, isShow, onHide }) {
    const [categories, setCategories] = useState();

    useEffect(() => {
        categoryService.getCategories().then((res) => setCategories(res));
    }, []);

    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[0, 10]}
                delay={[0, 200]}
                placement="bottom-start"
                render={(attrs) => {
                    return (
                        <Popper.Wrapper
                            className={cx('wrapper')}
                            position={{ top: '-16px', left: '40px' }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <Popper.Header title={'Categories'} />
                            <div className={cx('content')}>
                                {categories &&
                                    categories.map((category) => (
                                        <CategoryItem
                                            key={category?.id}
                                            title={category?.title}
                                            slug={category?.slug}
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

Category.propTypes = {
    children: PropTypes.node.isRequired,
    isShow: PropTypes.bool,
    onHide: PropTypes.func,
};

export default Category;
