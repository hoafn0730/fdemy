import { CLOSE_MODAL, CLOSING_MODAL, OPEN_MODAL } from '../types';

const openAuthModal = () => {
    return { type: OPEN_MODAL };
};

const closingAuthModal = () => {
    return { type: CLOSING_MODAL };
};

const closeAuthModal = () => {
    return { type: CLOSE_MODAL };
};

export { openAuthModal, closingAuthModal, closeAuthModal };
