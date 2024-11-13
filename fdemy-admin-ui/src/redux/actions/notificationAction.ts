import { ADD_NEW_NOTIFICATION } from '../types/notificationType';

const addNewNotification = (payload: any) => {
    return { type: ADD_NEW_NOTIFICATION, payload: payload };
};

export { addNewNotification };
