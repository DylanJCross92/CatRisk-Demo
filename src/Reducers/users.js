import {getSession} from "../Utils/session";

const initial_state = {
    users: {},
    user_update: {
        status: null
    },
    user_reinvite: {
        status: null
    }
};

export default function(state = initial_state, action = {}){

    const actionPayload = action.payload;
    const actionType = action.type;

    switch(actionType){
        case "GET_USERS_REQUEST":
            return {
                ...state,
                users: {}
            };

        case "GET_USERS_SUCCESS":
            return {
                ...state,
                users: actionPayload
            };


        case "GET_USERS_ERROR":
            return {
                ...state,
                users: false,
            };

        case "USER_INVITE_REQUEST":
            return {
                ...state,
                status: "request"
            };

        case "USER_INVITE_SUCCESS":
            return {
                ...state,
                status: "success",
                users: actionPayload.access.hasOwnProperty(getSession("currentCustomer")) ? state.users.concat(actionPayload) : state.users
            };

        case "USER_INVITE_ERROR":
            return {
                ...state,
                status: "error",
                error: {
                    code: actionPayload.response.data.status ? actionPayload.response.data.status : 500,
                    message: actionPayload.response.data.message ? actionPayload.response.data.message : "Unknown Internal Server Error",
                }
            };

        case "USER_REINVITE_REQUEST":
            return {
                ...state,
                user_reinvite: {
                    status: "request"
                }
            };

        case "USER_REINVITE_SUCCESS":
            return {
                ...state,
                user_reinvite: {
                    status: "success"
                }
            };

        case "USER_REINVITE_ERROR":
            return {
                ...state,
                user_reinvite: {
                    status: "error"
                }
            };

        case "USER_UPDATE_REQUEST":
            return {
                ...state,
                status: "request",
                user_update: {
                    status: "request"
                },
            };

        case "USER_UPDATE_SUCCESS":
            return {
                ...state,
                status: "success",
                user_update: {
                    status: "success"
                },
                users: state.users.length > 0 ? state.users.map((user, index) => {
                    return user.user_id == actionPayload.user_id ? actionPayload : user;
                }) : user
            };

        case "USER_UPDATE_ERROR":
            return {
                ...state,
                status: "error",
                user_update: {
                    status: "error"
                },
                error: {
                    code: actionPayload.response.data.status ? actionPayload.response.data.status : 500,
                    message: actionPayload.response.data.message ? actionPayload.response.data.message : "Unknown Internal Server Error",
                }
            };
    }

    return state;
}