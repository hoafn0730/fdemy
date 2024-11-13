import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CommonItem.module.scss';
import Image from '../Image';
import IndexModule from '../IndexModule';

const cx = classnames.bind(styles);

function CommonItem({ children, className, linkTo, title, image, ctaTitle }) {
    return (
        <IndexModule className={cx('col', 'l-3', 'm-6', 'c-12')}>
            <div className={cx('wrapper', className)}>
                <Link className={cx('link')} to={linkTo}>
                    {/* <Button rounded outline>{ctaTitle}</Button> */}
                    <Image className={cx('thumb')} src={image} alt={title} />
                </Link>
                <h3 className={cx('title')}>
                    <Link to={linkTo}>{title}</Link>
                </h3>
                {children}
            </div>
        </IndexModule>
    );
}

CommonItem.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    linkTo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ctaTitle: PropTypes.string,
    children: PropTypes.node,
};

export default CommonItem;
