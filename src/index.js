import React from "react";
import "./index.css";
import ReactDOM from "react-dom"
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./Components/Redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./Components/Redux/state";
import store from "./Components/Redux/state";
import './index.css';

import {updateNewPostText} from "./Components/Redux/state";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>*/}
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));

};

store.subscribe(renderEntireTree);
renderEntireTree(state.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


