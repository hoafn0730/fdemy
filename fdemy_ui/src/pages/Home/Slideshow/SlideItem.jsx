import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Slideshow.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function SlideItem({ title, desc, ctaTitle, linkTo, image, styles }) {
    return (
        <div className={cx('item')} style={styles}>
            <div className={cx('left')}>
                <h2 className={cx('heading')}>
                    <Link to={linkTo}>{title}</Link>
                </h2>
                <p className={cx('desc')}>{desc}</p>
                <div>
                    <Button outline rounded className={cx('ctaBtn')}>
                        {ctaTitle}
                    </Button>
                </div>
            </div>
            <div className={cx('right')}>
                <Link to={linkTo}>
                    <Image className={cx('img')} src={image} alt="" />
                </Link>
            </div>
        </div>
    );
}

SlideItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    ctaTitle: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

export default SlideItem;
