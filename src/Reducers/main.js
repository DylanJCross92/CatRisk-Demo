import {setSession, getSession, removeSession, is_logged_in} from "../Utils/session";

const defaultCustomer = getSession("user_data") ? Object.keys(getSession("user_data").access)[0] : null;

const initial_state = {
    logged_in: is_logged_in(),
    customers: getSession("user_data") ? getSession("user_data").access : [
        "icg"
    ],
    currentCustomer: getSession("currentCustomer") ? getSession("currentCustomer") : undefined
};

export default function(state = initial_state, action = {}){

    const actionPayload = action.payload;
    const actionType = action.type;

    switch(actionType){

        case "GET_CUSTOMERS_REQUEST":
            return {
                ...state,
            };

        case "GET_CUSTOMERS_SUCCESS":
            return {
                ...state,
                customers: actionPayload
            };

        case "GET_CUSTOMERS_ERROR":
            return {
                ...state,
            };

        case "CHANGE_CUSTOMER_REQUEST":

            console.log(actionPayload);

            if(actionPayload){
                setSession("currentCustomer", actionPayload);
            }
            else
            {
                removeSession("currentCustomer");
            }

            return {
                ...state,
                currentCustomer: actionPayload
            };

        case "STATUS_401":
            return {
                ...state,
                logged_in: false
            };

    }

    return state;
}