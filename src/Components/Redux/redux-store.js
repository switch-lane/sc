import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let benchOfReducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messageReducer,
    sidebar: sidebarReducer
});
let store = createStore(benchOfReducers);

export default store
