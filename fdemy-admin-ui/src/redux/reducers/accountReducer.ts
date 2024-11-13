import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../types/accountType';

const INITIAL_STATE = {
    userInfo: {
        accessToken: '',
        refreshToken: '',
        email: '',
        username: '',
    },
    isLogin: false,
    isLoading: false,
    error: '',
};

const accountReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                isLogin: false,
                isLoading: true,
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                isLogin: true,
                isLoading: false,
                error: '',
            };

        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isLogin: false,
                isLoading: false,
                error: action.error,
            };

        case USER_LOGOUT:
            return {
                ...state,
                userInfo: {
                    accessToken: '',
                    refreshToken: '',
                    email: '',
                    username: '',
                },
                isLogin: false,
                isLoading: false,
                error: '',
            };

        default:
            return state;
    }
};

export default accountReducer;
