import Firebase from 'firebase';
import {
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

export const loginEmailChanged = (text) => ({
    type: LOGIN_EMAIL_CHANGED,
    payload: text
});

export const loginPasswordChanged = (text) => ({
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
});

export const login = ({ email, password }) => (dispatch) => {
    dispatch({ type: LOGIN });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => loginSuccess(dispatch, user))
        .catch((error) => loginFail(dispatch));
};

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
    
};

const loginFail = (dispatch) => {
    dispatch({ type: LOGIN_FAIL });
};