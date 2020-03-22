import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./user-reducer";

let benchOfReducers = combineReducers({
    //методы этого объекта это свойства state
    ProfilePage: profileReducer,
    MessagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});
let store = createStore(benchOfReducers);

export default store
