import { TOAST } from '../actions/types';

const INITIALMESSAGE = {
    title: "Welcome to CSAFE",
    kind: "success",
    subtitle: "The server for Keyholders and Safeholders",
    timeout: 0
    };



const toastReducer = (state = {...INITIALMESSAGE}, action) => {
    switch (action.type) {
        case TOAST:
            return { ...state, ...action.payload};
        default: 
            return state;
    }
};

export default toastReducer;