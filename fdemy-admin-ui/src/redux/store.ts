import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/rootReducer';
import { injectStore } from '~/utils/httpRequest';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
injectStore(store);

export const persistor = persistStore(store);

export default store;
