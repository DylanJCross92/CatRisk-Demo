import {combineReducers} from "redux";
import MainReducer from "./main";
import LoginReducer from "./login";
import UserReducer from "./users";

const allReducers = combineReducers({
    main: MainReducer,
    login: LoginReducer,
    users: UserReducer,
});

export default allReducers;