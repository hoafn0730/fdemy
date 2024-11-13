import { ADD_NEW_NOTIFICATION } from '../types/notificationType';

const INITIAL_STATE = {
    items: [],
};

const notificationReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ADD_NEW_NOTIFICATION:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        default:
            return state;
    }
};

export default notificationReducer;
