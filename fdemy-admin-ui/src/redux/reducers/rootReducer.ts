import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from '../reducers/counterReducer';
import accountReducer from '../reducers/accountReducer';
import notificationReducer from '../reducers/notificationReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
};

const rootReducer = combineReducers({
    counter: counterReducer,
    account: persistReducer(authPersistConfig, accountReducer),
    notification: notificationReducer,
});

export default rootReducer;
