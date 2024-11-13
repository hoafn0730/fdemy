import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authModalReducer from './authModalReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import notificationReducer from './notificationReducer';
import previewReducer from './previewReducer';
import themeReducer from './themeReducer';

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['userInfo', 'isLogin'],
};

const rootReducer = combineReducers({
    user: persistReducer(authPersistConfig, authReducer),
    authModal: authModalReducer,
    modal: modalReducer,
    notification: notificationReducer,
    preview: previewReducer,
    // search: searchReducer,
    theme: themeReducer,
});

export default rootReducer;
