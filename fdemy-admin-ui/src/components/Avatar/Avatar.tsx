import classnames from 'classnames/bind';

import styles from './Avatar.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { forwardRef } from 'react';

const cx = classnames.bind(styles);

type AvatarProps = {
    src: string;
    alt: string;
    className?: string;
    style?: object;
    onClick?: () => void;
};

function Avatar({ src, alt, className, style, onClick }: AvatarProps, ref: any) {
    return (
        <div
            className={cx('wrapper', {
                [className as string]: className,
            })}
            style={style}
            onClick={onClick}
        >
            <Image ref={ref} className={cx('img')} src={src} alt={alt} fallback={images.fallbackUser} />
        </div>
    );
}

export default forwardRef(Avatar);
