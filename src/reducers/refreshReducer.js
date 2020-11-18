import { REFRESH,
         LOGIN } from "../actions/types";

const INITIAL_STATE = {
        userName: null,
        displayName: null,
        access_token: null,
        refresh_token: null,
        isLoggedIn: false
};

const refreshReducer = (state = INITIAL_STATE, action) => {
    //console.log("In reducer")
    //console.log(state)
    //console.log(action)
    switch (action.type) {
        case REFRESH:
            return { ...state, 
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token 
            };
        case LOGIN:
            return { ...state,
                userName: action.payload.userName, 
                displayName: action.payload.display_name,   
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token,
                isLoggedIn: true
            };
        default: 
            return state;
    }
};

export default refreshReducer;