import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Search.module.scss';
import Image from '~/components/Image';

type SearchItemProps = {
    title: string;
    to: string;
    image: string;
};

const cx = classnames.bind(styles);

function SearchItem({ title, to, image }: SearchItemProps) {
    return (
        <Link to={to} className={cx('searchItem')}>
            <Image className={cx('avatar')} alt="" src={image} />
            <span>{title}</span>
        </Link>
    );
}

export default SearchItem;
