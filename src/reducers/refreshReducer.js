import { REFRESH } from "../actions/types";

const INITIAL_STATE = {
        userName: 'Charlotte',
        displayName: 'carly26',
        access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ5NjAwNjAsIm5iZiI6MTYwNDk2MDA2MCwianRpIjoiNGVhODFkNzktOWY3MS00M2UxLTk1M2QtZWFmZWQwNjZjODBjIiwiZXhwIjoxNjA0OTYwOTYwLCJpZGVudGl0eSI6MiwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.JfVf04lRrW-yGiI_VeNfyboV00fLPW64u59Cag_K7iw',
        refresh_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ5NjAwNjAsIm5iZiI6MTYwNDk2MDA2MCwianRpIjoiNWZmN2E4MjYtNTZjNC00NWU2LThlMDktODA1YThkZjY1OWVkIiwiZXhwIjoxNjA3NTUyMDYwLCJpZGVudGl0eSI6MiwidHlwZSI6InJlZnJlc2gifQ.5ZyxtKJeIi9pNU-L1RxRD_iRwmZfWBQPQvGiG17LPnU',
        isLoggedIn: true
};

const refreshReducer = (state = INITIAL_STATE, action) => {
    console.log("In reducer")
    console.log(state)
    console.log(action)
    switch (action.type) {
        case REFRESH:
            return { ...state, 
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token 
            };
        default: 
            return state;
    }
};

export default refreshReducer;