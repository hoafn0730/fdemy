import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as authService from '~/services/authService';
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../types/accountType';

const doLogin = ({ email, password }: { email: string; password: string }): ThunkAction => {
    return async (dispatch: Dispatch, getState: any) => {
        dispatch({ type: USER_LOGIN_REQUEST });

        authService
            .login({ email, password })
            .then((res) => {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
                window.location.href = '/';
            })
            .catch((error) => dispatch({ type: USER_LOGIN_SUCCESS, error }));
    };
};

const getCurrentUser = (): ThunkAction => {
    return async (dispatch: Dispatch, getState: any) => {
        dispatch({ type: USER_LOGIN_REQUEST });

        authService
            .getCurrentUser()
            .then((res) => {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
            })
            .catch((error) => dispatch({ type: USER_LOGIN_FAILURE, error }));
    };
};

const clearAccount = () => {
    return {
        type: USER_LOGOUT,
    };
};

// export const decreaseCounter = () => {
//     return {
//         type: DECREMENT,
//     };
// };

export { doLogin, getCurrentUser, clearAccount };
