import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tippy.js/dist/tippy.css';

import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import store, { persistor } from '~/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/* <React.StrictMode> */}
            <GlobalStyles>
                <App />
            </GlobalStyles>
            {/* </React.StrictMode> */}
        </PersistGate>
    </Provider>,
);
