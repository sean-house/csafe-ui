import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import safeListReducer from './safeListReducer';
import refreshReducer from './refreshReducer';
import toastReducer from './toastReducer';


export default combineReducers({
    currentUser: refreshReducer,
    safeList: safeListReducer,
    form: formReducer,
    toast: toastReducer
});