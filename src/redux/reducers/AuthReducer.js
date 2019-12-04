import {
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: false,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN:
            return { ...state, loading: true, error: '' };
        case LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_FAIL:
            return { ...state, loading: false, password: '', error: true };
        default: 
            return state;
    }
};