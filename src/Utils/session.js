import Cookies from 'universal-cookie';
const cookie = new Cookies();

export function setSession(name = "token", data, expires_in = 60*60*60) {
    let expires_at = (expires_in * 1000) + new Date().getTime();

    cookie.set(name, data, {Expires: expires_at});
}

export function getSession(name = "token") {
    return cookie.get(name);
}

export function removeSession(name) {
    if(name){
        cookie.remove(name);
    }
    else
    {
        cookie.remove("token");
        cookie.remove("user_data");
        cookie.remove("currentCustomer");
    }
}

export function is_logged_in() {
    return !!getSession() && !!getSession("user_data");
}