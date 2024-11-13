import { CLOSE_MODAL, CLOSING_MODAL, OPEN_MODAL } from '../types';

const INITIAL_STATE = {
    isOpen: false,
    isClosing: false,
};

const authModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                isClosing: false,
            };

        case CLOSING_MODAL:
            return {
                ...state,
                isOpen: true,
                isClosing: true,
            };

        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                isClosing: false,
            };

        default:
            return state;
    }
};

export default authModalReducer;
