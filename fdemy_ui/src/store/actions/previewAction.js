import { CLOSE_PREVIEW, OPEN_PREVIEW } from '../types';

const openPreview = () => {
    return { type: OPEN_PREVIEW };
};
const closePreview = () => {
    return { type: CLOSE_PREVIEW };
};

export { openPreview, closePreview };
