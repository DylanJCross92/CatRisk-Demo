import {setSession, getSession, removeSession, is_logged_in} from "../Utils/session";

const initial_state = {
    loggedIn: is_logged_in(),
    user: getSession("user_data") ? getSession("user_data") : {
        role: "user"
    },
    login: {
        status: null
    },
    create_password: {
        status: null
    },
    forgot_password: {
        status: null
    },
    reset_password: {
        status: null
    },
    self_update: {
        status: null
    },
    error: null
};

export default function(state = initial_state, action = {}){

    switch(action.type){
        case "CREATE_PASSWORD_REQUEST":
            return {
                ...state,
                create_password: {
                    status: "request"
                }
            };
        case "CREATE_PASSWORD_SUCCESS":
            return {
                ...state,
                create_password: {
                    status: "success"
                }
            };

        case "CREATE_PASSWORD_ERROR":
            return {
                ...state,
                create_password: {
                    status: "error"
                }
            };

        case "FORGOT_PASSWORD_REQUEST":
            return {
                ...state,
                forgot_password: {
                    status: "request"
                }
            };
        case "FORGOT_PASSWORD_SUCCESS":
            return {
                ...state,
                forgot_password: {
                    status: "success"
                }
            };
        case "FORGOT_PASSWORD_ERROR":
            return {
                ...state,
                forgot_password: {
                    status: "error"
                }
            };

        case "RESET_PASSWORD_REQUEST":
            return {
                ...state,
                reset_password: {
                    status: "request"
                }
            };

        case "RESET_PASSWORD_SUCCESS":
            return {
                ...state,
                reset_password: {
                    status: "success"
                }
            };

        case "RESET_PASSWORD_ERROR":
            return {
                ...state,
                reset_password: {
                    status: "error"
                }
            };

        case "USER_LOGIN_REQUEST":
            return {
                ...state,
                login: {
                    status: "request"
                },
                loggedIn: false
            };

        case "USER_LOGIN_SUCCESS":
            setSession("token", action.payload.access_token, action.payload.expires_in);
            setSession("user_data", action.payload);

            return {
                ...state,
                token: action.payload.access_token,
                user: action.payload,
                login: {
                    status: "success"
                },
                loggedIn: true
            };

        case "USER_LOGIN_ERROR":

            return {
                ...state,
                login: {
                    status: "error"
                },
                loggedIn: false,
                error: {
                    code: action.payload.status ? action.payload.status : 500,
                    message: "Email or Password are invalid.",
                }
            };

        case "USER_UNAUTHORIZED":
            removeSession();

            return {
                ...state,
                loggedIn: false
            };

        case "USER_LOGOUT_REQUEST":
            removeSession();

            return {
                ...state,
                token: null,
                loggingIn: false,
                loggedIn: false
            };

        case "SELF_UPDATE_REQUEST":
            return {
                ...state,
                self_update: {
                    status: "request"
                },
            };

        case "SELF_UPDATE_SUCCESS":
            setSession("user_data", action.payload);

            return {
                ...state,
                self_update: {
                    status: "success"
                },
                user: action.payload
            };

        case "SELF_UPDATE_ERROR":
            return {
                ...state,
                self_update: {
                    status: "error"
                },
            };
    }

    return state;
}