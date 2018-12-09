import api from '../Utils/api';

export function createPassword(temp_token, email, new_password) {

    return (dispatch) => {
        dispatch({type: "CREATE_PASSWORD_REQUEST"});

        api.createPassword(temp_token, email, new_password).then(response => {
            dispatch({type: "CREATE_PASSWORD_SUCCESS", payload: response});
        }).catch(function(error) {
            dispatch({type: "CREATE_PASSWORD_ERROR", payload: error});
        });
    }
}

export function resetPassword(temp_token, email, new_password) {

    return (dispatch) => {
        dispatch({type: "RESET_PASSWORD_REQUEST"});

        api.resetPassword(temp_token, email, new_password).then(response => {
            dispatch({type: "RESET_PASSWORD_SUCCESS", payload: response});
        }).catch(function(error) {
            dispatch({type: "RESET_PASSWORD_ERROR", payload: error});
        });
    }
}

export function forgotPassword(email) {

    return (dispatch) => {
        dispatch({type: "FORGOT_PASSWORD_REQUEST"});

        api.forgotPassword(email).then(response => {
            if(response.data.statusCode == 500){
                dispatch({type: "FORGOT_PASSWORD_ERROR", payload: undefined});
            }
            else
            {
                dispatch({type: "FORGOT_PASSWORD_SUCCESS", payload: response});
            }
        }).catch(function(error) {
            console.log("resp_error", error);

            dispatch({type: "FORGOT_PASSWORD_ERROR", payload: error});
        });
    }
}

export function loginUser(email, password) {

    return (dispatch) => {
        dispatch({type: "USER_LOGIN_REQUEST"});
        dispatch({type: "GET_CUSTOMERS_REQUEST"});

        api.login(email, password).then(response => {
            dispatch({type: "USER_LOGIN_SUCCESS", payload: response});
            dispatch({type: "GET_CUSTOMERS_SUCCESS", payload: response.access});
        }).catch(function(error) {
            dispatch({type: "USER_LOGIN_ERROR", payload: error});
        });
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch({type: "USER_LOGOUT_REQUEST"});
    }
}
