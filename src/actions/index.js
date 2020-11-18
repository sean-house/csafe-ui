import safe_api from '../apis/safe_api';
import { 
    GET_SAFES,
    REFRESH,
    LOGIN
     } from './types';


export const getSafeList = () => {
    return async (dispatch, getState) => {
        const user = getState().currentUser;
        safe_api.defaults.headers.common['Authorization'] = "Bearer " + user.access_token;
        await safe_api.get('/operation/summary')
            .then((response) => {
                dispatch({
                    type: GET_SAFES,
                    payload: response.data
                });
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.toJSON());
                    safe_api.defaults.headers.common['Authorization'] = "Bearer " + user.refresh_token;
                    safe_api.post('/refresh')
                    .then((response) => {
                        console.log(response)
                        user.access_token = response.data.access_token
                        dispatch({
                            type: REFRESH,
                            payload: response.data
                        })
                    })
                    .then(() => {
                        safe_api.defaults.headers.common['Authorization'] = "Bearer " + user.access_token;
                        safe_api.get('/operation/summary')
                            .then((response) => {
                                dispatch({
                                    type: GET_SAFES,
                                    payload: response.data
                                });
                            })
                        });
                    }
                });
    };
};

export const refreshToken = () => {
    return async (dispatch, getState) => {
        console.log("In Refresh");
        const user = getState().currentUser;
        safe_api.defaults.headers.common['Authorization'] = "Bearer " + user.refresh_token;
        const response = await safe_api.post('/refresh')
        console.log(response)
        dispatch({
            type: REFRESH,
            payload: response.data
        })
    };
};


export const loginUser = (user, pw) => {
    return async (dispatch, getState) => {
        await safe_api.post('/login', {
            username: user,
            password: pw
        })
            .then((response) => {
                dispatch({
                    type: LOGIN,
                    payload: {
                        userName: user,
                        isLoggedin: true,
                        ...response.data}
                });
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                };
            })
    }
}