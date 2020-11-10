import { combineReducers } from 'redux';
import safeListReducer from './safeListReducer';
import refreshReducer from './refreshReducer'
// import { reducer as formReducer} from 'redux-form';


export default combineReducers({
    currentUser: refreshReducer,
    safeList: safeListReducer
    //form: formReducer,
    //streams: streamReducer
});