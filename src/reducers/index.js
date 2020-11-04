import { combineReducers } from 'redux';
// import { reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {
    isSignedIn: null,
    jwt_token: null,
    refresh_token: null
};

export default combineReducers({
    dummy: (state = INITIAL_STATE ) => {
        return state;
    }
    //auth: authReducer,
    //form: formReducer,
    //streams: streamReducer
});