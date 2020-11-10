import { GET_SAFES } from "../actions/types";

// const INITIAL_STATE = {
//     safeList: [],
//     currentUser: {}
// };

const safeListReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SAFES:
            return { ...state, summary: action.payload.safe_list};
        default: 
            return state;
    }
};

export default safeListReducer;