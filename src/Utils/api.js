import axios from 'axios';
import baseUrl from './baseUrl';
import {getSession} from "./session";


const BASE_URL = baseUrl;

module.exports = {

    getAccessToken: function(){
        return getSession() ? getSession() : null;
    },

    /* CREATE PASSWORD */
    createPassword: function(temp_token, email, new_password){
        return axios.post(BASE_URL+"/users/verifyemail", {
            email: email,
            temp_token: temp_token,
            new_password: new_password
        }).then(function(response){

        });
    },

    /* SEND EMAIL - REINVITE USER */
    reInviteUser: function(email){
        return axios.post(BASE_URL+"/users/resendemail", {
            email: email
        },
        {headers: {
                Authorization: `Bearer ${this.getAccessToken()}`
        }
        }).then(function(response){

        });
    },

    /* RESET PASSWORD */
    resetPassword: function(temp_token, email, new_password){

        return axios.post(BASE_URL+"/users/verifyemail", {
            email: email,
            temp_token: temp_token,
            new_password: new_password
        }).then(function(response){
            return response;
        });
    },

    /* SEND EMAIL - FORGOT PASSWORD */
    forgotPassword: function(email){
        return axios.post(BASE_URL+"/users/resetpassword", {
            email: email
        }).then(function(response){
            return response;
        });
    },

    /* LOGIN */
    login: function(username, password){
        return axios.post(BASE_URL+"/users/login", {
            email: username,
            password: password
        }).then(function(response){
            const user = response.data;

            return {
                user_id: user.user_id.replace("auth0|", ""),
                access_token: user.user_metadata.access_token,
                expires_in: user.user_metadata.expires,
                email: user.email,
                status: user.user_metadata.status,
                first_name: user.user_metadata.first_name,
                last_name: user.user_metadata.last_name,
                max_role: user.user_metadata.max_role,
                access: user.user_metadata.access
            }
        });
    },

    getCustomers: function(){
        return axios.get(BASE_URL+"/organizations", {
            headers: {
                Authorization: `Bearer ${this.getAccessToken()}`
            }
        }).then(function(response){
            return response.data;
        });
    },

    /* GET USERS */
    getUsers: function(currentCustomer){
        const URL = currentCustomer ? BASE_URL+"/users/org/"+currentCustomer : BASE_URL+"/users";

        return axios.get(URL, {
                headers: {
                    Authorization: `Bearer ${this.getAccessToken()}`
                }
            }).then(function(response){

            return response.data.filter(user => user.user_metadata).map((user) => {

                return {
                    user_id: user.user_id.replace("auth0|", ""),
                    email: user.email,
                    status: user.user_metadata.status,
                    first_name: user.user_metadata.first_name,
                    last_name: user.user_metadata.last_name,
                    max_role: user.user_metadata.max_role,
                    access: user.user_metadata.access
                }
            });
        });
    },

    /* INVITE USER */
    inviteUser: function(params) {
        return axios.post(BASE_URL+"/users", params,
            {
                headers: {
                    Authorization: `Bearer ${this.getAccessToken()}`
                }
            }).then(function(response) {
            const user = response.data;

            return {
                user_id: user.user_id.replace("auth0|", ""),
                email: user.email,
                first_name: user.user_metadata.first_name,
                last_name: user.user_metadata.last_name,
                max_role: user.user_metadata.max_role,
                access: user.user_metadata.access
            }
        });
    },

    /* UPDATE USER */
    updateUser: function(params) {
        const user_id = params.user_id;

        if (user_id) {
            return axios.patch(BASE_URL+"/users/"+encodeURI(user_id), params,
                {
                    headers: {
                        Authorization: `Bearer ${this.getAccessToken()}`
                    }
                }).then(function(response) {
                const user = response.data;

                return {
                    user_id: user.user_id.replace("auth0|", ""),
                    email: user.email,
                    status: user.user_metadata.status,
                    first_name: user.user_metadata.first_name,
                    last_name: user.user_metadata.last_name,
                    max_role: user.user_metadata.max_role,
                    access: user.user_metadata.access
                }
            });
        }
    },
};