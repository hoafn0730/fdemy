import { CLOSE_PREVIEW, OPEN_PREVIEW } from '../types';

const INITIAL_STATE = {
    isOpen: false,
};

const previewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_PREVIEW:
            return {
                ...state,
                isOpen: true,
            };

        case CLOSE_PREVIEW:
            return {
                ...state,
                isOpen: false,
            };

        default:
            return state;
    }
};

export default previewReducer;
