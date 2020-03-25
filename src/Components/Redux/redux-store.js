import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let benchOfReducers = combineReducers({
    //методы этого объекта это свойства state
    ProfilePage: profileReducer,
    MessagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(benchOfReducers, applyMiddleware(thunkMiddleware));

export default store
