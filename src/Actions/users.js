import api from '../Utils/api';

export function getUsers(currentCustomer) {
    return (dispatch) => {
        dispatch({type: "GET_USERS_REQUEST"});

        api.getUsers(currentCustomer).then(function(response) {
            if(response.length>0) {
                dispatch({type: "GET_USERS_SUCCESS", payload: response});
            }
            else
            {
                dispatch({type: "GET_USERS_ERROR", payload: response});
            }
        }).catch(function(error) {
            if(error.response.status == 401)
            {
                dispatch({type: "USER_UNAUTHORIZED", payload: error});
            }
            else
            {
                dispatch({type: "GET_USERS_ERROR", payload: error});
            }
        });
    }
}

export function updateUser(data) {

    const actionTypeRequest = data.self ? "SELF_UPDATE_REQUEST" : "USER_UPDATE_REQUEST";
    const actionTypeSuccess = data.self ? "SELF_UPDATE_SUCCESS" : "USER_UPDATE_SUCCESS";
    const actionTypeError = data.self ? "SELF_UPDATE_ERROR" : "USER_UPDATE_ERROR";

    return (dispatch) => {
        dispatch({type: actionTypeRequest});

        api.updateUser(data).then(response => {
            if(response){
                dispatch({type: actionTypeSuccess, payload: response});
            }
            else
            {
                dispatch({type: actionTypeError, payload: {
                    data: {
                            status: 500,
                            message: "Unknown Error"
                        }
                    }
                });
            }

        }).catch(function(error) {
            dispatch({type: actionTypeError, payload: error});
        });
    }
}

export function inviteUser(data) {

    return (dispatch) => {
        dispatch({type: "USER_INVITE_REQUEST"});

        api.inviteUser(data).then(response => {
            dispatch({type: "USER_INVITE_SUCCESS", payload: response});
        }).catch(function(error) {
            dispatch({type: "USER_INVITE_ERROR", payload: error});
        });
    }
}

export function reInviteUser(email) {

    return (dispatch) => {
        dispatch({type: "USER_REINVITE_REQUEST"});

        api.reInviteUser(email).then(response => {
            dispatch({type: "USER_REINVITE_SUCCESS", payload: response});
        }).catch(function(error) {
            dispatch({type: "USER_REINVITE_ERROR", payload: error});
        });
    }
}

