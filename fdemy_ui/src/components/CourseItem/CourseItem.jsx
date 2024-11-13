import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './CourseItem.module.scss';
import CommonItem from '../CommonItem';
import Image from '../Image';
import Button from '../Button';
import formatPrice from '~/utils/formatPrice';

const cx = classnames.bind(styles);

function CourseItem({ title, desc, linkTo, image, ctaTitle, oldPrice, mainPrice, isDetail }) {
    const navigate = useNavigate();

    return (
        <>
            {isDetail ? (
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('thumb')}>
                            <Link to={linkTo}>
                                <Image src={image} alt={title} />
                            </Link>
                        </div>
                        <div className={cx('info')}>
                            <h2 className={cx('title')}>
                                <Link to={linkTo}>
                                    {title}
                                    <span className={cx('free-title')}>Miễn phí</span>
                                </Link>
                            </h2>
                            {mainPrice && <div className={cx('price')}>mainPrice</div>}
                            {desc && <p className={cx('desc')}>{desc}</p>}
                            <Button primary rounded className={cx('detail-btn')} onClick={() => navigate(linkTo)}>
                                View Course
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <CommonItem title={title} linkTo={linkTo} image={image} ctaTitle={ctaTitle}>
                    <div className={cx('price')}>
                        <>
                            {!!oldPrice && <span className={cx('old-price')}>{formatPrice(oldPrice)}</span>}
                            <span className={cx('main-price')}>
                                {mainPrice > 0 ? formatPrice(mainPrice) : 'Miễn phí'}
                            </span>
                        </>
                    </div>
                </CommonItem>
            )}
        </>
    );
}

CourseItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    linkTo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ctaTitle: PropTypes.string,
    oldPrice: PropTypes.number,
    mainPrice: PropTypes.number,
    isDetail: PropTypes.bool,
};

export default CourseItem;
