import { 
    TOAST
     } from './types';


export const toastMessage = (messageParms) => {
    return (dispatch) => {
        dispatch({
            type: TOAST,
            payload: messageParms
        })
    }
};