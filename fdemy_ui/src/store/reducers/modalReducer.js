import { CLOSE_MODAL, OPEN_MODAL } from '../types';

const INITIAL_STATE = {
    isOpen: true,
};

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
            };

        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
            };

        default:
            return state;
    }
};

export default modalReducer;
