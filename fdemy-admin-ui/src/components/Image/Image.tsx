import { forwardRef, useState } from 'react';

import images from '~/assets/images';

type ImageProps = {
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
};

function Image({ src, alt, className, fallback = images.noImage, ...props }: ImageProps, ref: any) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return <img ref={ref} className={className} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
