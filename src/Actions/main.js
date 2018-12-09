import api from '../Utils/api';

export function getCustomers() {
    return (dispatch) => {
        dispatch({type: "GET_CUSTOMERS_REQUEST"});

        api.getCustomers().then(function(response) {
            dispatch({type: "GET_CUSTOMERS_SUCCESS", payload: response});
        }).catch(function(error) {
            dispatch({type: "GET_CUSTOMERS_ERROR", payload: error});
        });
    }
}

export function changeCustomer(customer) {
    return (dispatch) => {
        dispatch({type: "CHANGE_CUSTOMER_REQUEST", payload: customer});
    }
}


