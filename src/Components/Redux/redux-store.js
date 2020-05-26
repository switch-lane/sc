import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let benchOfReducers = combineReducers({
    //методы этого объекта это свойства state
    ProfilePage: profileReducer,
    MessagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

// 1.chrome extensions:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(benchOfReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//2.original:
//const store = createStore(benchOfReducers, applyMiddleware(thunkMiddleware));

export default store
