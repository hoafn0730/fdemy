import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './LearningPath.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function LearningPath({ title, desc, slug, image }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <h2 className={cx('title')}>
                        <Link to={'/road-map/' + slug}>{title}</Link>
                    </h2>
                    <p className={cx('desc')}>{desc}</p>
                </div>
                <div className={cx('thumb-wrap')}>
                    <Link to={'/road-map/' + slug} className={cx('thumb-rounded')}>
                        <Image className={cx('thumb')} src={image} alt={title} />
                    </Link>
                </div>
            </div>
            <div className={cx('cta')}>
                <Button primary rounded to={'/road-map/' + slug}>
                    View detail
                </Button>
            </div>
        </div>
    );
}

LearningPath.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default LearningPath;
