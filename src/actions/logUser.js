import safe_api from '../apis/safe_api';

import { 
    LOGIN,
    TOAST
     } from './types';

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
                dispatch({
                    type: TOAST,
                    payload: {
                        title: "LOGIN",
                        kind: "success",
                        subtitle: "Congratulations you are now logged in",
                        timeout: 5000
                    }
                })
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                };
            })
    }
};