import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import edit from "./edit";

const rootReducer = combineReducers({
    auth, user, edit
});

export default rootReducer;