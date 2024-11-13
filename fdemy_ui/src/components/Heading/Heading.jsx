import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Heading.module.scss';
import MarkdownParser from '../MarkdownParser';

const cx = classnames.bind(styles);

function Heading({ title, desc, updatedAt, className }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
        >
            <h1 className={cx('heading')}>{title}</h1>

            {desc && (
                <MarkdownParser
                    className={cx('desc')}
                    style={{ '--font-size': '1.6rem', '--line-height': '1.6' }}
                    content={desc}
                />
            )}
            {updatedAt && <p className={cx('updated')}>Cập nhật {updatedAt}</p>}
        </div>
    );
}

Heading.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    updatedAt: PropTypes.string,
    className: PropTypes.string,
};

export default Heading;
