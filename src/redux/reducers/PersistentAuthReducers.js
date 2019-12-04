import {
    GET_TOKEN,
    SAVE_TOKEN,
    REMOVE_TOKEN,
    LOADING,
    ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    token: {},
    loading: true,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return { ...state, token: action.token };
        case SAVE_TOKEN: 
            return { ...state, token: action.token };
        case REMOVE_TOKEN:
            return { ...state, token: action.token };
        case LOADING:
            return { ...state, loading: action.isLoading };
        case ERROR:
            return { ...state, error: action.error };
        default: 
            return state;
    }
};