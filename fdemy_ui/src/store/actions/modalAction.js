import { CLOSE_MODAL, OPEN_MODAL } from '../types';

const openModal = () => {
    return { type: OPEN_MODAL };
};
const closeModal = () => {
    return { type: CLOSE_MODAL };
};

export { openModal, closeModal };
