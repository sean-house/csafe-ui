import { combineReducers } from 'redux';
import safeListReducer from './safeListReducer';
import refreshReducer from './refreshReducer'


export default combineReducers({
    currentUser: refreshReducer,
    safeList: safeListReducer
    //form: formReducer,
    //streams: streamReducer
});